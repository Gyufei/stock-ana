import { Button, Collapse, CollapseProps } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../common/reset-btn';
import GenDataCon from '../../common/gen-data-con';

export default function OriginTimeSeriesData() {
  const [timeSeriesData, setRandomData] = useState<Array<number>>([]);

  const handleGen = () => {
    setRandomData([]);
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
        <Button type="primary" className="ml-5" onClick={handleGen}>
          生成序列
        </Button>

        {timeSeriesData.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} /> : null}
      </div>
    </div>
  );
}
