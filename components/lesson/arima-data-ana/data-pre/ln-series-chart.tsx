import { Alert, Button, Collapse, CollapseProps } from 'antd';
import ResetBtn from '../../common/reset-btn';
import ImageDisplay from '../../common/image-display';
import { useChartImage } from '@/lib/hook/use-chart-image';

export default function LnSeriesChart() {
  const { chartData, handleDraw, resetChartData } = useChartImage(3, '对数营业收入（lnIncome）的时序图');

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `对数营业收入（lnIncome）的时序图`,
      children: <ImageDisplay images={chartData} />,
    },
  ];

  const handleReset = () => {
    resetChartData();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <Button className="mb-2" onClick={handleDraw} type="primary">
          绘制
        </Button>

        {chartData.length ? (
          <>
            <Collapse defaultActiveKey="1" items={chartCon} />
            <Alert
              className="mt-2"
              type="info"
              showIcon
              message="分析结论"
              description="对数时序图说明：格力电器营业收入的波动性减弱，降低了异方差。"
            />
          </>
        ) : null}
      </div>
    </div>
  );
}
