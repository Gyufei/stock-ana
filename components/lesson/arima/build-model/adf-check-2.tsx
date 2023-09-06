import { useState } from 'react';
import { Button, Select } from 'antd';

import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import ResultDisplay from '@/components/share/result-display';
import { useFetchError } from '@/lib/hook/use-fetch-error';
import LabelText from '@/components/share/label-text';
import { BuildModelCode } from '@/data/code/arima';
import { usePosterData } from '@/lib/hook/use-poster-data';
import { useAtomValue } from 'jotai';
import { originColOptionsAtom } from '@/lib/states/lesson-arima-state';

export default function ADFCheck2() {
  const title = 'ADF检验(方法二)';
  const originColOptions = useAtomValue(originColOptionsAtom);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;
  const {
    data: resData,
    trigger: handleGenAction,
    reset: reset1,
  } = usePosterData('build_model/4', errorHandler, {
    title: 'ADF检验(方法二)结果说明',
    tip: `
    第一个是adt检验的结果，简称为T值，表示t统计量
    第二个简称为p值，表示t统计量对应的概率值。  
    第三个表示延迟。
    第四个表示测试的次数。  
    第五个是配合第一个一起看的，是在99%，95%，90%置信区间下的临界的ADF检验的值。  
      第一点，1%、%5、%10不同程度拒绝原假设的统计值和ADF Test result的比较，ADF Test result同时小于1%、5%、10%即说明非常好地拒绝该假设。
    `,
    resCallback: (res) => res?.value,
  });

  const [reqParams, setReqParams] = useState<Record<string, string | null>>({
    lnCol: '营业收入',
  });

  const handleGen = async () => {
    if (!reqParams.lnCol) return;
    await handleGenAction(reqParams);
  };

  const handleReset = () => {
    reset1();
    setReqParams({
      lnCol: '营业收入',
    });
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" title={title} tip="以数据框类型显示ADF检验结果" code={BuildModelCode[2]} />
        <div className="mb-2">
          <LabelText className="w-18" label="选取对数列" />
          <Select
            style={{ width: 150 }}
            value={reqParams.lnCol}
            onChange={(val) => {
              setReqParams({ ...reqParams, lnCol: val });
            }}
            options={originColOptions}
          />
        </div>
        <Button className="mb-2" type="primary" onClick={handleGen}>
          计算
        </Button>

        {resData ? <ResultDisplay keyName="16" title="对数营业收入序列的检验结果" type="json" data={[resData]} /> : null}

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
