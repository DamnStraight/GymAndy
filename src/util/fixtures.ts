import DayOfWeek, { DaysOfWeek } from '../entities/DayOfWeek';
import { getConnection } from 'typeorm';

const DAYS_OF_WEEK: DaysOfWeek[] = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY',
];

export async function runFixtures() {
  await getConnection();

  await DayOfWeek.save(
    DAYS_OF_WEEK.map<DayOfWeek>(item => new DayOfWeek(item)),
  );
}
