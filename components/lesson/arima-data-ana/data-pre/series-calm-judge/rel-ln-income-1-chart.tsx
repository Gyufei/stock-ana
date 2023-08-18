import { Button, Collapse, CollapseProps } from 'antd';
import ResetBtn from '../../../common/reset-btn';
import ImageDisplay from '../../../common/image-display';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import { useChartImage } from '@/lib/hook/use-chart-image';

export default function RelLnIncome1Chart() {
  const { chartData, handleDraw, resetChartData } = useChartImage(8, '一阶差分（lnIncome_1）的自相关图与偏自相关');

  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `一阶差分（lnIncome_1）的自相关图与偏自相关图`,
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
        <CapTitle className="mb-2" title="一阶差分（lnIncome_1）的自相关图与偏自相关图" code={ArimaDataAnaCode[8]} />
        <Button className='mb-2' onClick={handleDraw} type="primary">
          绘制
        </Button>
        {chartData.length ? (
          <>
            <Collapse defaultActiveKey="1" items={chartCon} />
          </>
        ) : null}
      </div>
    </div>
  );
}
