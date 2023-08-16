import { CSSProperties, useMemo, useState } from 'react';
import useSWR from 'swr';
import { Drawer, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import fetcher from '@/lib/fetcher';

export default function DatasetSelect({
  value,
  onChange,
  datasetType,
  style,
}: {
  value: string;
  onChange: (_v: string, _obj: Record<string, any>) => void;
  datasetType?: number | undefined;
  style: CSSProperties;
}) {
  const { data: datasets } = useSWR(`/api/dataset?type=${datasetType}`, fetcher);
  const selectedDataSet: Record<string, any> = datasets?.find((item: Record<string, any>) => item.id === value);
  const content = useMemo(
    () =>
      selectedDataSet?.content
        ? selectedDataSet.content.map((row: Record<string, any>) => ({
            ...row,
            key: row.id,
          }))
        : [],
    [selectedDataSet?.content]
  );

  const columns: ColumnsType<any> = Object.keys(content[0] || {}).map((key: string, index) => {
    return {
      title: key,
      dataIndex: key,
      key: key + index,
    };
  });

  const handleSelect = (v: string) => {
    const obj = datasets?.find((item: Record<string, any>) => item.id === v);
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
      <Select style={style} value={value} onChange={handleSelect} options={datasets} fieldNames={{ label: 'name', value: 'id' }} />
      {value && (
        <div onClick={showDrawer} className="text-blue-500 cursor-pointer text-xs">
          查看
        </div>
      )}
      <Drawer width={640} title="策略简介" placement="right" onClose={onClose} open={open}>
        <Table size="small" bordered scroll={{ x: 620 }} dataSource={content} columns={columns}></Table>
      </Drawer>
    </div>
  );
}
