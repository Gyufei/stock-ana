import { useState } from 'react';
import { Button, Select } from 'antd';

import { usePosterData } from '@/lib/hook/use-poster-data';
import ResetBtn from '@/components/share/reset-btn';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';
import CapTitle from '@/components/share/cap-title';
import { BuildModelCode2 } from '@/data/code/arima';
import { useComments } from '@/lib/hook/use-comment';

export default function ObLadder1() {
  const title = '观察法定阶: 二阶差分偏相关图';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const [reqParams, setReqParams] = useState<any>({
    lnCol: '营业收入',
  });

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: chartData,
    trigger: handleDrawAction,
    reset: reset1,
  } = usePosterData('build_model/7', errorHandler, {
    title,
    resCallback: (res) => res.image,
  });

  const { comments, handleSetComments } = useComments();
  const handleDraw = async (params: any) => {
    handleDrawAction(params);
    handleSetComments({
      ...comments,
      var19: `很明显自相关图显示，自相关图与偏自相关图均显示拖尾性。 这里我们使用模型ARMA，并选取p=1,q=1。`,
    });
  };

  const handleReset = () => {
    setReqParams({
      n: 15,
    });
    reset1();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} code={BuildModelCode2[1]} />
        <LabelText className="w-18" label="选取对数列" />
        <Select
          style={{ width: 150 }}
          value={reqParams.lnCol}
          onChange={(val) => {
            setReqParams({ ...reqParams, lnCol: val });
          }}
          options={originColOptions}
        />
        <br />
        <Button className="my-2" onClick={() => handleDraw(reqParams)} type="primary">
          绘制二阶差分自相关偏相关图
        </Button>

        {chartData ? (
          <>
            <ResultDisplay keyName="var19" data={[chartData]} type="image" title={title} />
          </>
        ) : null}

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
