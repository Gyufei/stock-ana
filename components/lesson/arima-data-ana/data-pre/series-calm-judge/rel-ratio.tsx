import { Collapse, CollapseProps } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import DataDisplay from '../../../common/data-display';
import TooltipBtn from '../../../common/tooltip-btn';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';

export default function RelRatio() {
  const [randomData, setRandomData] = useState<Array<number>>([]);

  const handleGen = () => {
    setRandomData([]);
  };

  const randomDataCon: CollapseProps['items'] = [
    {
      key: '1',
      label: `自相关与偏自相关系数`,
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
        <CapTitle className="mb-2" index={1} title="计算自相关与偏自相关系数" code={ArimaDataAnaCode[6]} />
        <TooltipBtn tip="使用时间序列工具包（statsmodels.tsa.stattools）中的acf和pacf函数" type="primary" onClick={handleGen}>
          计算
        </TooltipBtn>

        {randomData.length > 0 ? <Collapse className="mt-4" defaultActiveKey="1" items={randomDataCon} /> : null}
      </div>
    </div>
  );
}
