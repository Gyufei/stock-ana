import { Input, InputNumber, Switch } from 'antd';

export default function StrategyOptions({ params, onChange }: { params: Array<any>; onChange: (_key: string, _value: any) => void }) {
  return (
    <>
      {params.length > 0 ? (
        <div className="flex items-center my-4 gap-x-8">
          {params.map((item) => (
            <div key={item.key} className="flex items-center">
              <div className="mr-2 text-slate-500 text-sm">{item.label}:</div>
              <div className="flex items-center gap-x-1">
                {(() => {
                  switch (item.type) {
                    case 'text':
                      return <Input onChange={(e) => onChange(item.value, e.target.value)} />;
                    case 'number':
                      return <InputNumber min={0} onChange={(e) => onChange(item.value, e)} />;
                    case 'boolean':
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
