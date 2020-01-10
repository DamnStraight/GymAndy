import { useState, useEffect } from 'react';
import { Exercise } from '../entities/Exercise';
import { getConnection } from 'typeorm';

/**
 * Utility hook that returns a list of exercises and function to refresh it
 * @param loadInitial Load the list on component mount
 */
const useExerciseList = (
  loadInitial: boolean = false,
): [Exercise[], boolean, () => Promise<void>] => {
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState<boolean>(loadInitial);

  async function findAllExercises() {
    setLoading(true);
    await getConnection();

    setExerciseList(await Exercise.find());

    setLoading(false);
  }

  useEffect(() => {
    if (loadInitial) {
      findAllExercises();
    }
  }, []);

  return [exerciseList, loading, findAllExercises];
};

export default useExerciseList;