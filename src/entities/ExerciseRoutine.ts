import {
  Column,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { Exercise } from './Exercise';
import { Workout } from './Workout';

@Entity()
export class ExerciseRoutine extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Exercise)
  exercise: Exercise;

  @Column('numeric')
  sets: number;

  @Column('numeric')
  repetitions: number;

  @ManyToMany(
    type => Workout,
    workout => workout.exerciseRoutines,
    { lazy: true },
  )
  workouts: Workout[];

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
