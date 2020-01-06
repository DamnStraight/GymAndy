import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ExerciseRoutine } from './ExerciseRoutine';

@Entity()
export class Workout extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(
    type => ExerciseRoutine,
    exerciseRoutine => exerciseRoutine.workouts,
  )
  @JoinTable()
  exerciseRoutines: ExerciseRoutine[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
