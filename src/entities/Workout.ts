import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';
import { ExerciseRoutine } from './ExerciseRoutine';
import DayOfWeek from './DayOfWeek';

@Entity()
export class Workout extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @ManyToMany(
    type => ExerciseRoutine,
    exerciseRoutine => exerciseRoutine.workouts,
  )
  @JoinTable()
  exerciseRoutines: ExerciseRoutine[];

  @ManyToMany(type => DayOfWeek)
  @JoinTable()
  days: DayOfWeek[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
