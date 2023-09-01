import { useEffect, useState } from 'react';

export function useFetchError() {
  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      setErrorText(null);
    };
  }, []);

  return {
    errorText,
    setErrorText,
  };
}
