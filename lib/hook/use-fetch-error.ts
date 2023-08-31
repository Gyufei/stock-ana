import { useEffect, useState } from 'react';

export function useFetchError() {
  const [errorText, setErrorText] = useState<string | null>(null);

  const catchErrorWrapper = (cb: (..._pArgs: any[]) => Promise<void>) => {
    async function wrapper(...args: any[]) {
      try {
        setErrorText(null);
        await cb(...args);
      } catch (error: any) {
        setErrorText(error?.info || '未知错误, 请重置后重试');
      }
    }

    return wrapper;
  };

  useEffect(() => {
    return () => {
      setErrorText(null);
    };
  }, []);

  return {
    errorText,
    setErrorText,
    catchErrorWrapper,
  };
}
