import { Task } from 'src/tasks/task.entity';
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

  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}
