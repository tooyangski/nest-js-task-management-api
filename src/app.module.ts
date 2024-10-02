import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TodosModule } from './todo/todos.module';
import { DatabaseModule } from './common/database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        HOST: Joi.string().required(),
        PORT: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASS: Joi.string().required(),
        DB_NAME: Joi.string().required(),
        AUTO_LOAD_ENTITIES: Joi.bool().required(),
        SYNC_SCHEMA: Joi.bool().required(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRY: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthModule,
    TodosModule,
  ],
})
export class AppModule {}
