import { useEffect, useMemo, useState } from 'react';

export function useStrategy() {
  const [id, setId] = useState<string>('');
  const [obj, setObj] = useState<any>(null);
  const [params, setParams] = useState<Record<string, any>>({});

  const parameters: Array<Record<string, any>> = useMemo(() => (obj?.parameter ? JSON.parse(obj.parameter) : []), [obj]);
  console.log('123', parameters);

  const handleSelect = (id: string, obj: Record<string, any>) => {
    setId(id);
    setObj(obj);
  };

  useEffect(() => {
    const newParams = {} as any;
    for (const kv of parameters) {
      newParams[kv.key] = kv.default === 'None' ? null : kv.default;
    }
    setParams(newParams);
  }, [id]);

  const handleParamChange = (key: string, value: any) => {
    setParams((prev) => {
      console.log('prev', prev, key, value);
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
