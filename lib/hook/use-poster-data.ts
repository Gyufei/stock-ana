import { useEffect, useState } from 'react';
import { IImageConfig } from '@/components/share/image-config';
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
    catchErrorWrapper: (_fn: any) => any;
    setErrorText: (_text: string) => void;
  },
  arg?: {
    title?: string;
    tip?: string;
    resCallback?: (_res: any) => any;
  }
) {
  const { errorText, catchErrorWrapper } = errorHandler;

  const { lessonPoster } = useLessonPoster();
  const [data, setData] = useState<IPosterData | null>(null);

  const handleFetch = async (config?: IImageConfig) => {
    const cD = await lessonPoster(path, config);

    const data = {
      data: arg?.resCallback ? arg.resCallback(cD) : cD,
      title: arg?.title,
      tip: arg?.tip,
    };
    setData(data);

    return data;
  };

  useEffect(() => {
    return () => {
      setData(null);
    };
  }, []);

  return {
    data,
    errorText,
    trigger: catchErrorWrapper(handleFetch),
  };
}
