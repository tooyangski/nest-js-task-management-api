import { Injectable, NotFoundException } from '@nestjs/common';
import { TasksRepository } from './tasks.resository';
import { Task, TaskStatus } from './task.entity';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';

@Injectable()
export class TasksService {
  constructor(private tasksRepository: TasksRepository) {}

  async getTaskById(id: string): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: {
        id,
      },
    });

    if (!task) throw new NotFoundException(`Task with id: ${id} is not found`);

    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with id: ${id} is not found`);
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const timestamp = new Date().toISOString();

    const task = await this.getTaskById(id);
    task.status = status;
    task.modifiedAt = timestamp;

    await this.tasksRepository.save(task);
    return task;
  }

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }
}
