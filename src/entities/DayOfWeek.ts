import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// enum DaysOfWeek {
//   MONDAY = "MONDAY",
//   TUESDAY = "TUESDAY",
//   WEDNESDAY = "WEDNESDAY",
//   THURSDAY = "THURSDAY",
//   FRIDAY = "FRIDAY",
//   SATURDAY = "SATURDAY",
//   SUNDAR = "SUNDAR",
// }

type DaysOfWeek = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";

@Entity()
export default class DayOfWeek {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  dayOfWeek: DaysOfWeek;
}