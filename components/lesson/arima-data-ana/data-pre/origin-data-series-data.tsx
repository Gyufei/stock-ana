import { Button, Collapse, CollapseProps } from 'antd';
import { useContext, useState } from 'react';
import ResetBtn from '../../common/reset-btn';
import GenDataCon from '../../common/gen-data-con';
import { DataContext } from '..';
import dataProcessPoster from '@/lib/data-process-poster';

export default function OriginTimeSeriesData() {
  const { originData } = useContext(DataContext);
  const [timeSeriesData, setRandomData] = useState<Array<number>>([]);

  const handleGen = async () => {
    const res = await dataProcessPoster(1, originData);
    const resData = res['季度'].map((item: any, index: number) => ({
      季度: item,
      营业收入: res['营业收入'][index],
    }));

    setRandomData(resData);
  };

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `日期性序列——季度序列`,
      children: <GenDataCon data={timeSeriesData} />,
    },
  ];

  const handleReset = () => {
    setRandomData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <Button type="primary" className="mb-2" onClick={handleGen}>
          生成序列
        </Button>

        {timeSeriesData.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} /> : null}
      </div>
    </div>
  );
}
