import { useState } from 'react';
import dataPoster from '../http/data-process-poster';
import { IImageConfig } from '@/components/share/image-config';
import { useFetchError } from './use-fetch-error';

export function useChartImage(path: string, name: string) {
  const { errorText, catchErrorWrapper, setErrorText } = useFetchError();
  const [chartData, setChartData] = useState<any[]>([]);

  const handleDraw = async (config?: IImageConfig) => {
    const cD = await dataPoster(path, config);

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
