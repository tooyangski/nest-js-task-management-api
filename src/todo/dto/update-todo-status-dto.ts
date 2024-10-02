import { IsEnum } from 'class-validator';
import { TodoStatus } from '../todo.entity';

export class UpdateTodoStatusDto {
  @IsEnum(TodoStatus)
  status: TodoStatus;
}
