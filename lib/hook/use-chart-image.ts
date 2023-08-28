import { useState } from 'react';
import { IImageConfig } from '@/components/share/image-config';
import { useFetchError } from './use-fetch-error';
import { useLessonPoster } from '../http/lesson-poster';

export function useChartImage(path: string, name: string) {
  const { lessonPoster } = useLessonPoster();
  const { errorText, catchErrorWrapper, setErrorText } = useFetchError();
  const [chartData, setChartData] = useState<any[]>([]);

  const handleDraw = async (config?: IImageConfig) => {
    const cD = await lessonPoster(path, config);

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
