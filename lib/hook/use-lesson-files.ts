import { useEffect } from 'react';
import { IFile, filesAtom } from '../states/lesson-arima-state';
import { useSetAtom } from 'jotai';

export function useLessonFiles(initValue: Array<IFile>) {
  const setFiles = useSetAtom(filesAtom);

  useEffect(() => {
    setFiles(initValue || []);
  });
}
