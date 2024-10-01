import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TasksModule } from './tasks/tasks.module';
import { DatabaseModule } from './common/database.module';

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
      }),
    }),
    DatabaseModule,
    TasksModule,
  ],
})
export class AppModule {}
