import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config'; 

import { UserController } from './crud/crud.controller';
import { UserService } from './crud/crud.service';
import { HelpersModule } from 'libs/helper/src/helpers.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), HelpersModule],
  controllers: [ UserController],
  providers: [ UserService],
})
export class AppModule {}
