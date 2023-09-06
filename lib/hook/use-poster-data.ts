import { useEffect, useState } from 'react';
import { useLessonPoster } from '../http/lesson-poster';

export interface IPosterData {
  data: any;
  title?: string;
  tip?: string;
}

export function usePosterData(
  path: string,
  errorHandler: {
    errorText: string | null;
    setErrorText: (_text: string) => void;
  },
  arg?: {
    title?: string;
    tip?: string;
    resCallback?: (_res: any) => any;
  }
) {
  const { errorText, setErrorText } = errorHandler;

  const { lessonPoster } = useLessonPoster();
  const [data, setData] = useState<IPosterData | null>(null);

  const trigger = async (config?: Record<string, any>) => {
    try {
      setErrorText('');

      const cD = await lessonPoster(path, config);

      const data = {
        data: arg?.resCallback ? arg.resCallback(cD) : cD,
        title: arg?.title,
        tip: arg?.tip,
      };
      setData(data);

      return data;
    } catch (e: any) {
      setErrorText(e?.info || '未知错误, 请重置后重试');
    }
  };

  const reset = () => {
    setData(null);
    setErrorText('');
  };

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return {
    data,
    reset,
    errorText,
    trigger,
  };
}
