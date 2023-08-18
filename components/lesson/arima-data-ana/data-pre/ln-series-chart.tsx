import { Alert, Button, Collapse, CollapseProps } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../common/reset-btn';
import ImageDisplay from '../../common/image-display';

export default function LnSeriesChart() {
  const [chartData, setChartData] = useState<any[]>([]);

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `对数营业收入（lnIncome）的时序图`,
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
        <Button onClick={handleDraw} type="primary">
          绘制
        </Button>

        {chartData.length ? (
          <>
            <Collapse className="mt-4" defaultActiveKey="1" items={chartCon} />
            <Alert type="info" showIcon message="分析结论" description="对数时序图说明：格力电器营业收入的波动性减弱，降低了异方差。" />
          </>
        ) : null}
      </div>
    </div>
  );
}
