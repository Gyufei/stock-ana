import { useState } from 'react';
import dataProcessPoster from '../data-process-poster';
import { toBase64 } from '../util';

export function useChartImage(index: number, name: string) {
  const [chartData, setChartData] = useState<any[]>([]);

  const handleDraw = async () => {
    const cD = await dataProcessPoster(index);

    setChartData([
      {
        name,
        src: toBase64(cD.image),
      },
    ]);
  };

  const resetChartData = () => {
    setChartData([]);
  };

  return {
    chartData,
    resetChartData,
    handleDraw,
  };
}
