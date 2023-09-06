import { useState } from 'react';

import ResetBtn from '@/components/share/reset-btn';
import TooltipBtn from '@/components/share/tooltip-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import { BuildModelCode2 } from '@/data/code/arima';
import { usePosterData } from '@/lib/hook/use-poster-data';
import LabelText from '@/components/share/label-text';
import { InputNumber } from 'antd';

export default function ModelInitSel() {
  const title = '构建ARIMA模型';

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: resData,
    trigger: handleGenAction,
    reset: reset1,
  } = usePosterData('build_model/9', errorHandler, {
    title: 'ARIMA模型',
    tip: `赤池信息准则（AIC）
          贝叶斯信息准则（BIC）
          赫克曼-奎恩准则（HQIC）`,
  });

  const [reqParams, setReqParams] = useState<Record<string, number | null>>({
    self: 4,
    sub: 1,
    move: 1,
  });

  const handleGen = async () => {
    if (!reqParams.self || !reqParams.sub || !reqParams.move) return;

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
        <LabelText className="w-18" label="自相关阶数" />
        <InputNumber
          value={reqParams.self}
          onChange={(e) =>
            setReqParams({
              ...reqParams,
              self: e || 0,
            })
          }
        />
        <LabelText className="w-18 ml-4" label="差分阶数" />
        <InputNumber
          value={reqParams.sub}
          onChange={(e) =>
            setReqParams({
              ...reqParams,
              self: e || 0,
            })
          }
        />
        <LabelText className="w-18 ml-4" label="移动平均阶数" />
        <InputNumber
          value={reqParams.move}
          onChange={(e) =>
            setReqParams({
              ...reqParams,
              self: e || 0,
            })
          }
        />
        <br />
        <TooltipBtn className="my-2" tip="构建不同的ARIMA模型，运用AIC、BIC和Hqic指标进行模型初选。" type="primary" onClick={handleGen}>
          建立
        </TooltipBtn>

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
