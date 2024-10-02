/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TodosRepository } from './todos.resository';
import { Todo, TodoStatus } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo-dto';
import { GetTodosFilterDto } from './dto/get-todos-filter-dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TodosService {
  constructor(private TodosRepository: TodosRepository) {}

  async getTodoById(id: string, user: User): Promise<Todo> {
    const Todo = await this.TodosRepository.findOne({
      where: {
        id,
        user,
      },
    });

    if (!Todo) throw new NotFoundException(`Todo with id: ${id} is not found`);

    return Todo;
  }

  createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo> {
    return this.TodosRepository.createTodo(createTodoDto, user);
  }

  async deleteTodo(id: string, user: User): Promise<void> {
    const result = await this.TodosRepository.delete({ id, user });

    if (result.affected === 0) {
      throw new NotFoundException(`Todo with id: ${id} is not found`);
    }
  }

  async updateTodoStatus(
    id: string,
    status: TodoStatus,
    user: User,
  ): Promise<Todo> {
    const timestamp = new Date().toISOString();

    const Todo = await this.getTodoById(id, user);
    Todo.status = status;
    Todo.modifiedAt = timestamp;

    await this.TodosRepository.save(Todo);
    return Todo;
  }

  async getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]> {
    return this.TodosRepository.getTodos(filterDto, user);
  }
}
