import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

enum DaysOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAR = "SUNDAR",
}

@Entity()
export default class DayOfWeek {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'simple-enum',
    enum: DaysOfWeek,
  })
  dayOfWeek: DaysOfWeek;
}