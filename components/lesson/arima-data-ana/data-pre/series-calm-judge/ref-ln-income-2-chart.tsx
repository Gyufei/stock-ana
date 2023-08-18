import { Button, Collapse, CollapseProps } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import ImageDisplay from '../../../common/image-display';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

export default function RelLnIncome2Chart() {
  const [chartData, setChartData] = useState<any[]>([]);

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `二阶差分（lnIncome_1）的自相关图与偏自相关`,
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
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title="二阶差分（lnIncome_2）的自相关图与偏自相关图" code={ArimaDataAnaCode[9]} />
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
