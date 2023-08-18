import { useEffect, useMemo, useState } from 'react';

export function useStrategy() {
  const [id, setId] = useState<string>('');
  const [obj, setObj] = useState<any>(null);

  const parameters: Array<Record<string, any>> = useMemo(() => (obj?.parameter ? JSON.parse(obj.parameter) : []), [obj]);

  const handleSelect = (id: string, obj: Record<string, any>) => {
    setId(id);
    setObj(obj);
  };

  const [params, setParams] = useState<Record<string, any>>({});

  useEffect(() => {
    const newParams = {} as any;
    for (const kv of parameters) {
      newParams[kv.key] = null;
    }
    setParams(newParams);
  }, [id]);

  const handleParamChange = (key: string, value: any) => {
    console.log(key, value);
    setParams((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return {
    id,
    setId,
    obj,
    setObj,
    parameters,

    handleSelect,
    params,
    handleParamChange,
  };
}
