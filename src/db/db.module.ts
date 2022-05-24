import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';

@Global()
@Module({
  providers: [DbService], // provider declared here
  exports: [DbService] // expose globally
})
export class DbModule {}
