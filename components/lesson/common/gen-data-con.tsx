import LabelText from '@/components/share/label-text';
import { useDataToTable as useDataToTable } from '@/lib/hook/use-data-to-table';
import { InputNumber, Table } from 'antd';
import { useState } from 'react';

export default function GenDataCon({ data }: { data: Array<any> }) {
  const [num, setNum] = useState<number | null>(5);

  const { content, columns: cols } = useDataToTable(data || []);

  const sourceData = content.slice(0, num || 5);

  return (
    <div>
      <div className="flex items-center mb-2">
        <LabelText label="展示前" />
        <InputNumber id="randomNum" min={1} value={num} onChange={(e) => setNum(e || null)} />
        <span className="ml-2">行</span>
      </div>
      <Table size="small" pagination={false} bordered dataSource={sourceData} columns={cols}></Table>
    </div>
  );
}
