import { Connection, createConnection } from 'typeorm';
import { useRef, useEffect } from 'react';
import { Exercise } from '../entities/Exercise';
import { ExerciseRoutine } from '../entities/ExerciseRoutine';
import { Workout } from '../entities/Workout';

export const useConnection = () => {
  const connection = useRef<Connection | undefined>();

  useEffect(() => {
    async function connect() {
      if (connection.current === undefined) {
        connection.current = await createConnection({
          type: 'react-native',
          database: 'test',
          location: 'default',
          logging: ['error', 'query', 'schema'],
          synchronize: true,
          entities: [Exercise, ExerciseRoutine, Workout],
        });
      }
    }

    connect();
  }, []);

  return connection.current;

};