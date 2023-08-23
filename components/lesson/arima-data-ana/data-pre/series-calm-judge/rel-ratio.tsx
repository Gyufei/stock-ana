import { useState } from 'react';
import ResetBtn from '../../../common/reset-btn';
import TooltipBtn from '../../../common/tooltip-btn';
import CapTitle from '../../../common/cap-title';
import { ArimaDataAnaCode } from '@/data/code/arima-data-ana';
import dataProcessPoster from '@/lib/http/data-process-poster';
import ResultDisplay from '@/components/lesson/common/result-display';

export default function RelRatio() {
  const [relData, setRelData] = useState<Record<string, any>>();

  const handleGen = async () => {
    const res = await dataProcessPoster(6);
    setRelData(res);
  };

  const handleReset = () => {
    setRelData([]);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="计算自相关与偏自相关系数" code={ArimaDataAnaCode[6]} />
        <TooltipBtn
          className="mb-2"
          tip="使用时间序列工具包（statsmodels.tsa.stattools）中的acf和pacf函数"
          type="primary"
          onClick={handleGen}
        >
          计算
        </TooltipBtn>

        {relData ? (
          <ResultDisplay
            title="自相关与偏自相关系数"
            type="json"
            data={[
              {
                title: 'ACF_lnIncome',
                data: relData?.ACF_lnIncome || [],
              },
              {
                title: 'PACF_lnIncome',
                data: relData?.PACF_lnIncome || [],
              },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
}
