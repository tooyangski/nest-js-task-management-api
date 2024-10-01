import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getTaskWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((t) => t.status === status);
    }

    if (search) {
      tasks = tasks.filter((t) => {
        if (t.title.includes(search) || t.description.includes(search)) {
          return true;
        }

        return false;
      });
    }

    return tasks;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) throw new NotFoundException(`Task with id: ${id} is not found`);

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) throw new NotFoundException(`Task with id: ${id} is not found`);

    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
