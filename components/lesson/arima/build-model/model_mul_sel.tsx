import { useState } from 'react';

import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import { BuildModelCode2 } from '@/data/code/arima';
import { usePosterData } from '@/lib/hook/use-poster-data';
import { Button } from 'antd';

export default function ModelMulSel() {
  const title = '建立aic，bic和hqic的比较表';

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: resData,
    trigger: handleGenAction,
    reset: reset1,
  } = usePosterData('build_model/10', errorHandler, {
    title: '模型比较表',
    tip: `提示:警告信息是建模过程正常显示，提示arima（4，1，1）模型不收敛，需要调整建模参数`,
  });

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
        <Button className="my-2" type="primary" onClick={handleGen}>
          建立
        </Button>

        {resData && !errorText ? <ResultDisplay keyName="var21" title={title} type="json" data={[resData]} /> : null}

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
