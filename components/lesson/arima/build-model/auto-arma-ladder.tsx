import { useState } from 'react';

import ResetBtn from '@/components/share/reset-btn';
import TooltipBtn from '@/components/share/tooltip-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import { BuildModelCode2 } from '@/data/code/arima';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function AutoArmaLadder() {
  const title = 'autoARMA模型定阶';

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const { data: resData, trigger: handleGenAction, reset: reset1 } = usePosterData('build_model/8', errorHandler);

  const [reqParams, setReqParams] = useState<Record<string, number | null>>({});

  const handleGen = async () => {
    await handleGenAction(reqParams);
  };

  const handleReset = () => {
    reset1();
    setReqParams({});
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} code={BuildModelCode2[2]} />
        <TooltipBtn
          className="mb-2"
          tip="使用 pmdarima 库的 auto_arima 函数，自动选择并拟合时间序列模型"
          type="primary"
          onClick={handleGen}
        >
          拟合
        </TooltipBtn>

        {resData && !errorText ? <ResultDisplay keyName="var20" title={title} type="json" data={[resData]} /> : null}

        {errorText && (
          <ResultDisplay
            type="error"
            title={title}
            data={[
              {
                data: errorText,
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
