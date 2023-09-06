import { useMemo, useState } from 'react';
import { InputNumber } from 'antd';

import ResetBtn from '@/components/share/reset-btn';
import TooltipBtn from '@/components/share/tooltip-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { BuildModelCode } from '@/data/code/arima';
import { likeArrayObjToArray } from '@/lib/utils/util';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function QCheck() {
  const title = 'Q统计量检验';

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: qResData,
    trigger: handleGenAction,
    reset: reset1,
  } = usePosterData('build_model/2', errorHandler, {
    resCallback: (res) => {
      return JSON.parse(res);
    },
  });

  const [reqParams, setReqParams] = useState<Record<string, number | null>>({
    rangeMax: 15,
    rangeMin: 1,
    rangeStep: 1,
  });

  const handleGen = async () => {
    if (!reqParams.rangeMax || !reqParams.rangeMin || !reqParams.rangeStep) return;
    await handleGenAction(reqParams);
  };

  const tData = useMemo(() => {
    const lb_stat = likeArrayObjToArray(qResData?.data?.lb_stat);
    const lb_pvalue = likeArrayObjToArray(qResData?.data?.lb_pvalue);
    const bp_pvalue = likeArrayObjToArray(qResData?.data?.bp_pvalue);
    const bp_stat = likeArrayObjToArray(qResData?.data?.bp_stat);

    const data = lb_stat
      .map((item, index) => {
        return {
          num: index + 1,
          lb_stat: lb_stat[index + 1],
          lb_pvalue: lb_pvalue[index + 1],
          bp_stat: bp_stat[index + 1],
          bp_pvalue: bp_pvalue[index + 1],
        };
      })
      .filter((item) => item.num !== lb_stat.length);
    console.log(data);
    console.log(data.length);

    return { data };
  }, [qResData]);

  const handleReset = () => {
    reset1();
    setReqParams({
      rangeMin: 1,
      rangeMax: 15,
      rangeStep: 1,
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} tip="利用Ljung-Box Q统计量，检验lnIncome序列的自相关性" code={BuildModelCode[1]} />
        <div className="mb-2">
          <LabelText className="w-18 ml-4" tip="不包括结束值" label="设置 legs 范围" />
          <InputNumber
            value={reqParams.rangeMin}
            onChange={(e) => {
              setReqParams({
                ...reqParams,
                rangeMin: e,
              });
            }}
          />
          <span className="mx-1">-</span>
          <InputNumber
            value={reqParams.rangeMax}
            onChange={(e) => {
              setReqParams({
                ...reqParams,
                rangeMax: e,
              });
            }}
          />
          <LabelText className="w-18 ml-4" tip="每个相邻数字之间的差值, 必须为整数" label="步长" />
          <InputNumber
            value={reqParams.rangeStep}
            onChange={(e) => {
              setReqParams({
                ...reqParams,
                rangeStep: e,
              });
            }}
          />
        </div>
        <TooltipBtn className="mb-2" tip="利用Ljung-Box Q统计量，检验lnIncome序列的自相关性" type="primary" onClick={handleGen}>
          计算
        </TooltipBtn>

        {qResData && !errorText ? <ResultDisplay keyName="var14" title={title} type="table" data={[tData]} /> : null}

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
