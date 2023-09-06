import { Button, Select } from 'antd';
import { useMemo, useState } from 'react';

import { useFetchError } from '@/lib/hook/use-fetch-error';

import ResetBtn from '@/components/share/reset-btn';
import CapTitle from '@/components/share/cap-title';
import TooltipBtn from '@/components/share/tooltip-btn';
import LabelText from '@/components/share/label-text';
import ResultDisplay from '@/components/share/result-display';
import { usePosterData } from '@/lib/hook/use-poster-data';

export default function DataPrepare() {
  const reGenCalcOptions = [
    { value: 100000, label: '十万' },
    { value: 1000000, label: '百万' },
    { value: 10000000, label: '千万' },
  ];

  const indexColOptions = [
    {
      label: '季度',
      value: '季度',
    },
  ];

  const colOptions = [
    {
      label: '营业收入',
      value: '营业收入',
    },
    {
      label: '季度',
      value: '报表日期',
    },
  ];

  const [indexColName, setIndexColName] = useState('季度');
  const [reGenCol, setReGenCol] = useState<string | null>('营业收入');
  const [reGenCalcNum, setReGenCalcNum] = useState<number | null>(1000000);

  const errorHandler = useFetchError();
  const { errorText } = errorHandler;

  const { data: pRes, trigger: handleRead, reset: reset1 } = usePosterData('preprocessing/init_data', errorHandler);
  const oData = useMemo(
    () =>
      pRes?.data
        ? {
            data: pRes.data,
          }
        : null,
    [pRes]
  );

  const { data: reGenDataRes, trigger: handleReGenAction, reset: reset2 } = usePosterData('preprocessing/processed_data', errorHandler);
  const reGenData = useMemo(() => {
    if (!reGenDataRes?.data) return null;

    const reGenLabel = reGenCalcOptions.find((item) => item.value === reGenCalcNum)?.label;
    const d = reGenDataRes?.data.map((item: any) => {
      item[indexColName + '(索引列)'] = item['报表日期'];
      item[`${reGenCol}(${reGenLabel})`] = item[reGenCol || '营业收入'];
      delete item['报表日期'];
      delete item[reGenCol || '营业收入'];
      return item;
    });
    return {
      data: d,
    };
  }, [reGenDataRes]);

  const handleReGen = async () => {
    if (!reGenCol || !reGenCalcNum || !indexColName) return;
    await handleReGenAction({
      indexCol: indexColName,
      calcCol: reGenCol,
      calcNum: reGenCalcNum,
    });
  };

  const handleReset = () => {
    setIndexColName('报表日期');
    setReGenCol('营业收入');
    setReGenCalcNum(1000000);
    reset1();
    reset2();
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="读取原始数据" />
        <TooltipBtn
          className="my-2"
          type="primary"
          onClick={() => handleRead()}
          tip="运用pd.read_excel函数读取原始数据文件，进行数据描述性统计。"
        >
          读取数据
        </TooltipBtn>

        {errorText && (
          <ResultDisplay
            type="error"
            title="读取原始数据"
            data={[
              {
                data: errorText,
              },
            ]}
          />
        )}

        {oData ? (
          <>
            <ResultDisplay keyName="var1" type="table" title="读取的原始数据" data={[oData]} />
            <CapTitle className="my-2" index={2} title="处理原始数据" />
            <LabelText label="设置索引列报表日期为" />
            <Select style={{ width: 150 }} value={indexColName} onChange={setIndexColName} options={indexColOptions} />
            <div className="mt-2">
              <span>为方便数据展示和查看，设置</span>
              <Select
                style={{ marginLeft: '8px', marginRight: '8px', width: 150 }}
                value={reGenCol}
                onChange={setReGenCol}
                options={colOptions}
              />
              <span>的显示方式为</span>
              <Select
                style={{ marginLeft: '8px', marginRight: '8px', width: 150 }}
                value={reGenCalcNum}
                onChange={setReGenCalcNum}
                options={reGenCalcOptions}
              />
            </div>
            <Button className="my-2" onClick={handleReGen} type="primary">
              处理
            </Button>
          </>
        ) : null}

        {reGenData ? <ResultDisplay keyName="var2" type="table" title="处理后的数据" data={[reGenData]} /> : null}
      </div>
    </div>
  );
}
