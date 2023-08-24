import { useState } from 'react';
import dataProcessPoster from '../http/data-process-poster';
import { IImageConfig } from '@/components/lesson/common/image-config';
import { useFetchError } from './use-fetch-error';

export function useChartImage(index: number, name: string) {
  const { errorText, catchErrorWrapper, setErrorText } = useFetchError();
  const [chartData, setChartData] = useState<any[]>([]);

  const handleDraw = async (config?: IImageConfig) => {
    const cD = await dataProcessPoster(index, config);

    setChartData([
      {
        name,
        src: cD.image,
      },
    ]);
  };

  const resetChartData = () => {
    setChartData([]);
  };

  return {
    chartData,
    resetChartData,
    handleDraw: catchErrorWrapper(handleDraw),
    errorText,
    setErrorText,
  };
}
