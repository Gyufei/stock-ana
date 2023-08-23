import { Button } from 'antd';
import ResetBtn from '../../../common/reset-btn';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useChartImage } from '@/lib/hook/use-chart-image';
import ResultDisplay from '../../../common/result-display';

export default function LnIncome1Chart() {
  const { chartData, handleDraw, resetChartData } = useChartImage(4, 'lnIncome_1时序图');

  const handleReset = () => {
    resetChartData();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="绘制一阶差分时序图" code={ArimaDataAnaCode[4]} />
        <Button onClick={() => handleDraw()} type="primary">
          绘制
        </Button>

        {chartData.length ? 
        <ResultDisplay data={chartData} type="image" title="lnIncome_1时序图" /> 
        : null}
      </div>
    </div>
  );
}
