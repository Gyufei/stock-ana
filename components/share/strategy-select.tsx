import { CSSProperties, useState } from 'react';
import { Drawer, Select, Typography } from 'antd';
const { Paragraph } = Typography;
import useSWR from 'swr';

import fetcher from '@/lib/http/fetcher';

export default function StrategySelect({
  value,
  onChange,
  strategyType,
  style,
}: {
  value: string;
  onChange: (_v: string, _obj: Record<string, any>) => void;
  strategyType: number;
  style: CSSProperties;
}) {
  const { data: strategy } = useSWR(`/api/strategy?type=${strategyType}`, fetcher);

  const [selected, setSelected] = useState<Record<string, any> | null>();

  const handleSelect = (v: string) => {
    const obj = strategy?.find((item: Record<string, any>) => item.id === v);

    setSelected(obj);
    onChange(v, obj);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-x-2">
      <Select style={style} value={value} onChange={handleSelect} options={strategy} fieldNames={{ label: 'name', value: 'id' }} />
      {value && (
        <div onClick={showDrawer} className="text-blue-500 cursor-pointer text-xs">
          策略简介
        </div>
      )}
      <Drawer width={640} title={`${selected?.name}简介`} placement="right" onClose={onClose} open={open}>
        <Typography>
          <Paragraph>
            <div className="whitespace-pre-line">{selected?.describe}</div>
          </Paragraph>
        </Typography>
      </Drawer>
    </div>
  );
}
