import { IsNotEmpty } from 'class-validator';

export class CreateUpdateTodoDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
