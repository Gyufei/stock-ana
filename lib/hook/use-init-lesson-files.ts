import { useEffect } from 'react';
import { IFile, filesAtom } from '../states/lesson-arima-state';
import { useSetAtom } from 'jotai';

export function useInitLessonFiles(initValue?: Array<IFile>) {
  const setFiles = useSetAtom(filesAtom);

  useEffect(() => {
    setFiles(initValue || []);

    return () => {
      setFiles([]);
    };
  }, []);
}
