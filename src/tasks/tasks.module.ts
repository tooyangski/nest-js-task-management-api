import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksRepository } from './tasks.resository';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService, TasksRepository],
  controllers: [TasksController],
})
export class TasksModule {}
