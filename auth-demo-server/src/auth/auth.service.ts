import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { User } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { hash, verify } from "argon2";
import { DbService } from "src/db/db.service";
import { AuthDto } from "./dto";

export interface RespCredentials {
    access_token: string
}

@Injectable()
export class AuthService {

    public constructor(
        private dbService: DbService,
        private jwt: JwtService,
        private config: ConfigService) { }

    public async login(authDto: AuthDto): Promise<RespCredentials> {
        const user: User = await this.dbService.user.findUnique({
            where: {
                email: authDto.email
            }
        })
        if (!user)
            throw new ForbiddenException('User Not Found')

        const pwMatch: Boolean = await verify(user.hash, authDto.password)
        if (!pwMatch)
            throw new ForbiddenException('Password Not Correct')

        return this.signToken(user.id, user.email);
    }

    public async signup(authDto: AuthDto): Promise<RespCredentials> {

        // password hash generated by argon2 algorithm
        const genHash: string = await hash(authDto.password)

        try {
            const user = await this.dbService.user.create({
                data: {
                    email: authDto.email,
                    hash: genHash
                }
            })

            return this.signToken(user.id, user.email)
        } catch (err) {
            if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
                throw new ForbiddenException('credentials taken')
            }
            throw err
        }
    }

    /*
    This function sign token by userId and email
    */
    private async signToken(userId: number, email: string): Promise<RespCredentials> {
        const payload = {
            sub: userId,
            email
        }

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: this.config.get('JWT_SECRET')
        })

        return {
            access_token: token
        }
    }
}