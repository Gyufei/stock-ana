import { Button, Collapse, CollapseProps } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import ImageDisplay from '../../../common/image-display';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

export default function LnIncome2Chart() {
  const [chartData, setChartData] = useState<any[]>([]);

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `lnIncome_2时序图`,
      children: <ImageDisplay images={chartData} />,
    },
  ];

  const handleDraw = () => {
    setChartData([
      {
        name: '白噪声数据的折线图',
      },
    ]);
  };

  const handleReset = () => {
    setChartData([]);
  };

  return (
    <div>
      <ResetBtn className="mt-2" onClick={handleReset} />
      <div className="border-y py-2 ">
        <CapTitle className="mb-2" index={2} title="绘制二阶差分时序图" code={ArimaDataAnaCode[5]} />
        <Button onClick={handleDraw} type="primary">
          绘制
        </Button>

        {chartData.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={chartCon} />
          </>
        ) : null}
      </div>
    </div>
  );
}
