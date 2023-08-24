import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { originDataAtom } from '@/lib/states/lesson-arima-state';
import dataPoster from '../http/data-process-poster';

export function useOriginData(globalDataUrl: string) {
  const setOriginData = useSetAtom(originDataAtom);

  useEffect(() => {
    async function getOrigin() {
      const proData = await dataPoster(globalDataUrl);
      setOriginData(proData.data || []);
    }

    getOrigin();
  }, []);
}
