import { useAtomValue } from 'jotai';
import fetcher from './fetcher';
import { PathMap } from './path-map';
import { lessonQueryAtom } from '../states/lesson-arima-state';

export function useLessonPoster() {
  const lessonQuery = useAtomValue(lessonQueryAtom);

  async function lessonPoster(path: string, data?: any) {
    const reqData = {
      ...(data || {}),
      ...lessonQuery,
    };

    const res = fetcher(PathMap.lessonArima + '/' + path + '/', {
      method: 'POST',
      body: JSON.stringify(reqData),
    });

    return res;
  }

  return {
    lessonPoster,
  };
}
