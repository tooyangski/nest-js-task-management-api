import { Todo } from 'src/todo/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: string;

  @Column()
  modifiedAt: string;

  @OneToMany(() => Todo, (Todo) => Todo.user, { eager: true })
  todos: Todo[];
}
