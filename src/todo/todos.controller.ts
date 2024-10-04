import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateUpdateTodoDto } from './dto/create-todo-dto';
import { Todo } from './todo.entity';
import { UpdateTodoStatusDto } from './dto/update-todo-status-dto';
import { GetTodosFilterDto } from './dto/get-todos-filter-dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user-decorator';
import { User } from 'src/auth/user.entity';

@Controller('Todos')
@UseGuards(AuthGuard())
export class TodosController {
  constructor(private TodoService: TodosService) {}

  @Get()
  getTodos(
    @Query() filterDto: GetTodosFilterDto,
    @GetUser() user: User,
  ): Promise<Todo[]> {
    return this.TodoService.getTodos(filterDto, user);
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string, @GetUser() user: User): Promise<Todo> {
    return this.TodoService.getTodoById(id, user);
  }

  @Post()
  createTodo(
    @Body() createTodoDto: CreateUpdateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    return this.TodoService.createTodo(createTodoDto, user);
  }

  @Patch('/:id/status')
  updateTodosStatus(
    @Param('id') id: string,
    @Body() updateTodoStatusDto: UpdateTodoStatusDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    const { status } = updateTodoStatusDto;
    return this.TodoService.updateTodoStatus(id, status, user);
  }

  @Put('/:id')
  updateTodoss(
    @Param('id') id: string,
    @Body() existingTodo: CreateUpdateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    const { title, description } = existingTodo;
    return this.TodoService.updateTodo(id, title, description, user);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.TodoService.deleteTodo(id, user);
  }
}
