import { Button } from 'antd';
import ResetBtn from '../../../common/reset-btn';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useChartImage } from '@/lib/hook/use-chart-image';
import ResultDisplay from '../../../common/result-display';

export default function RelLnIncome1Chart() {
  const title = '一阶差分（lnIncome_1）的自相关图与偏自相关图';

  const { chartData, handleDraw, resetChartData } = useChartImage(8, '一阶差分（lnIncome_1）的自相关图与偏自相关');

  const handleReset = () => {
    resetChartData();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} code={ArimaDataAnaCode[8]} />
        <Button className="mb-2" onClick={() => handleDraw()} type="primary">
          绘制
        </Button>
        {chartData.length ? <ResultDisplay type="image" title={title} data={chartData}></ResultDisplay> : null}
      </div>
    </div>
  );
}
