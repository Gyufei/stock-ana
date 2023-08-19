import { Input, InputNumber, Switch } from 'antd';
import LabelText from './label-text';
import { useId } from 'react';

export default function StrategyOptions({
  params,
  value,
  onChange,
}: {
  params: Array<any>;
  value: Record<string, any>;
  onChange: (_key: string, _value: any) => void;
}) {
  const getTargetType = (typeStr: string) => {
    if (typeStr.includes('list')) {
      return 'list';
    }
    if (typeStr.includes('str')) {
      return 'str';
    }
    if (typeStr.includes('float')) {
      return 'float';
    }
    if (typeStr.includes('int')) {
      return 'int';
    }
    if (typeStr.includes('bool')) {
      return 'bool';
    }
    return 'NoneType';
  };

  return (
    <>
      {params.length > 0 ? (
        <div className="flex items-center my-4 gap-x-8 gap-y-2 flex-wrap">
          {params.map((item) => (
            <div key={item.key} className="flex items-center">
              {item.desc ? (
                <LabelText label={item.label} tip={item.desc} />
              ) : (
                <div className="mr-2 text-slate-500 text-sm break-keep">{item.label}:</div>
              )}
              <div key={Math.random()} className="flex items-center gap-x-1 flex-wrap">
                {(() => {
                  const joinType = Array.isArray(item.type) ? item.type.join(',') : item.type;
                  const type = getTargetType(joinType);
                  // eslint-disable-next-line no-prototype-builtins
                  const defaultVal = value.hasOwnProperty(item.key) ? value[item.key] : item.default;

                  switch (type) {
                    case 'str':
                      return <Input defaultValue={defaultVal} onChange={(e) => onChange(item.key, e.target.value)} />;
                    case 'list':
                      return (
                        <Input
                          defaultValue={JSON.stringify(defaultVal)}
                          onChange={(e) => onChange(item.key, JSON.parse(e.target.value || 'null'))}
                        />
                      );
                    case 'float':
                      return (
                        <InputNumber
                          defaultValue={defaultVal}
                          precision={2}
                          step={0.1}
                          min={0}
                          max={item.max || undefined}
                          onChange={(e) => onChange(item.key, e)}
                        />
                      );
                    case 'int':
                      return <InputNumber defaultValue={defaultVal} precision={0} min={0} onChange={(e) => onChange(item.key, e)} />;
                    case 'bool':
                      return <Switch onChange={(e) => onChange(item.value, e)} />;
                    case 'NoneType':
                      return <Input defaultValue={defaultVal} onChange={(e) => onChange(item.key, e.target.value)} />;
                    default:
                      return null;
                  }
                })()}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
