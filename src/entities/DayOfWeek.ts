import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

// enum DaysOfWeek {
//   MONDAY = "MONDAY",
//   TUESDAY = "TUESDAY",
//   WEDNESDAY = "WEDNESDAY",
//   THURSDAY = "THURSDAY",
//   FRIDAY = "FRIDAY",
//   SATURDAY = "SATURDAY",
//   SUNDAR = "SUNDAR",
// }

// NOTE simple-enum broken in typeorm right now
export type DaysOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

@Entity()
export default class DayOfWeek extends BaseEntity {
  constructor(dayOfWeek: DaysOfWeek) {
    super();
    this.dayOfWeek = dayOfWeek;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  dayOfWeek: DaysOfWeek;
}