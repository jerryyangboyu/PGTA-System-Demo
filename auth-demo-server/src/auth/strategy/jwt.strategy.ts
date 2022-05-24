import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "@prisma/client";
import { ExtractJwt, Strategy } from "passport-jwt";
import { DbService } from "src/db/db.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    public constructor(config: ConfigService, private dbService: DbService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET')
        })
    }

    public async validate(payload: {
        sub: number,
        email: string
    }): Promise<User> {
        const user: User = await this.dbService.user.findUnique({
            where: {
               id: payload.sub
            }
        })

        delete user.hash
        // if user is null, return null will trigger an 401 unauthorized error
        return user
    }
}