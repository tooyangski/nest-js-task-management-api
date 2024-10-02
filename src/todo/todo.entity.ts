import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum TodoStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TodoStatus;

  @Column({ nullable: true })
  createdAt!: string;

  @Column({ nullable: true })
  modifiedAt!: string;

  @ManyToOne(() => User, (user) => user.todos, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}
