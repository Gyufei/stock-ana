import { Alert, Button } from 'antd';
import ResetBtn from '../../common/reset-btn';
import { useChartImage } from '@/lib/hook/use-chart-image';
import ResultDisplay from '../../common/result-display';
import { useState } from 'react';
import ImageConfig from '../../common/image-config';

export default function LnSeriesChart() {
  const title = '对数营业收入（lnIncome）的时序图';
  const { chartData, handleDraw, resetChartData } = useChartImage(3, title);

  const [imageConfig, setImageConfig] = useState<IImageConfig>({
    x: '季度',
    y: '对数营业收入',
    title: '对数营业收入趋势',
  });

  const handleReset = () => {
    resetChartData();
    setImageConfig({
      x: '季度',
      y: '对数营业收入',
      title: '对数营业收入趋势',
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <ImageConfig config={imageConfig} setConfig={setImageConfig} />
        <Button className="mb-2" onClick={() => handleDraw()} type="primary">
          绘制
        </Button>

        {chartData.length ? (
          <>
            <ResultDisplay title={title} type="image" data={chartData} />
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
