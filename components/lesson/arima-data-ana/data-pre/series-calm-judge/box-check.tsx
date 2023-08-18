import { Button, Collapse, CollapseProps } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import DataDisplay from '../../../common/data-display';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

export default function BoxCheck() {
  const [randomData, setRandomData] = useState<Array<number>>([]);

  const handleGen = () => {
    setRandomData([]);
  };

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `Ljung-Box检验统计量, acf值, pacf值`,
      children: (
        <DataDisplay
          displayData={[
            {
              data: randomData,
            },
          ]}
        />
      ),
    },
  ];

  const handleReset = () => {
    setRandomData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title="获得Ljung-Box检验统计量" tip="也可获得acf和pacf值" code={ArimaDataAnaCode[7]} />
        <Button type="primary" onClick={handleGen}>
          计算
        </Button>
        {randomData.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} /> : null}
      </div>
    </div>
  );
}
