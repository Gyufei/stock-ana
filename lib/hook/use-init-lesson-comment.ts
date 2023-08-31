import { useEffect } from 'react';
import { commentsAtom } from '../states/lesson-arima-state';
import { useSetAtom } from 'jotai';

export function useInitLessonComments() {
  const setComments = useSetAtom(commentsAtom);

  useEffect(() => {
    setComments({});

    return () => {
      setComments({});
    };
  }, []);
}
