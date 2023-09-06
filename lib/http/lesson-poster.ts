import { useState } from 'react';
import { useAtomValue } from 'jotai';
import fetcher from './fetcher';
import { PathMap } from './path-map';
import { lessonQueryAtom } from '../states/lesson-arima-state';

export function useLessonPoster() {
  const lessonQuery = useAtomValue(lessonQueryAtom);

  const [isLoading, setIsLoading] = useState(false);

  async function poster(path: string, data?: any) {
    setIsLoading(true);
    const reqData = {
      ...(data || {}),
      ...lessonQuery,
    };

    const res = fetcher(path, {
      method: 'POST',
      body: JSON.stringify(reqData),
    });

    setIsLoading(false);
    return res;
  }

  async function lessonPoster(path: string, data?: any) {
    return poster(`${PathMap.lessonArimaPath}/${path}/`, data);
  }

  return {
    isLoading,
    lessonPoster,
    poster,
  };
}
