import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { originDataAtom } from '@/lib/states/lesson-arima-state';
import { useLessonPoster } from '../http/lesson-poster';

export function useInitLessonOriginData(globalDataUrl: string) {
  const { lessonPoster } = useLessonPoster();

  const setOriginData = useSetAtom(originDataAtom);

  useEffect(() => {
    async function getOrigin() {
      const proData = await lessonPoster(globalDataUrl);
      setOriginData(proData.data || []);
    }

    getOrigin();

    return () => {
      setOriginData([]);
    };
  }, []);
}
