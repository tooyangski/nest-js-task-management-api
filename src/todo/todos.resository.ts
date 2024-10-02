import { DataSource, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo-dto';
import { GetTodosFilterDto } from './dto/get-todos-filter-dto';
import { Todo, TodoStatus } from './todo.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';

@Injectable()
export class TodosRepository extends Repository<Todo> {
  constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager());
  }

  async getTodos(filterDto: GetTodosFilterDto, user: User): Promise<Todo[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('Todo');
    query.where({ user });

    if (status) {
      query.andWhere('Todo.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        '(LOWER(Todo.title) LIKE LOWER(:search) OR LOWER(Todo.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const Todos = await query.getMany();
    return Todos;
  }

  async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo> {
    const { title, description } = createTodoDto;
    const timestamp = new Date().toISOString();

    const Todo = this.create({
      title,
      description,
      status: TodoStatus.OPEN,
      createdAt: timestamp,
      modifiedAt: timestamp,
      user,
    });

    await this.save(Todo);

    delete Todo.user;
    return Todo;
  }
}
