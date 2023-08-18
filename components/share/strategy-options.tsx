import { Input, InputNumber, Switch } from 'antd';
import LabelText from './label-text';

export default function StrategyOptions({ params, onChange }: { params: Array<any>; onChange: (_key: string, _value: any) => void }) {
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
              <div className="flex items-center gap-x-1 flex-wrap">
                {(() => {
                  switch (item.type) {
                    case 'str':
                      return <Input onChange={(e) => onChange(item.key, e.target.value)} />;
                    case 'float':
                      return (
                        <InputNumber
                          defaultValue={item.default}
                          precision={2}
                          step={0.1}
                          min={0}
                          max={item.max || undefined}
                          onChange={(e) => onChange(item.key, e)}
                        />
                      );
                    case 'int':
                      return <InputNumber precision={0} min={0} onChange={(e) => onChange(item.key, e)} />;
                    case 'bool':
                      return <Switch onChange={(e) => onChange(item.value, e)} />;
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