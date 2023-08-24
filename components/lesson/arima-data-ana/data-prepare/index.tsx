import { Button, Select } from 'antd';
import { useState } from 'react';
import ResetBtn from '../../common/reset-btn';
import CapTitle from '../../common/cap-title';
import TooltipBtn from '../../common/tooltip-btn';
import dataProcessPoster from '@/lib/http/data-process-poster';
import LabelText from '@/components/share/label-text';
import { cloneDeep } from 'lodash';
import ResultDisplay from '../../common/result-display';

export default function DataPrepare() {
  const reGenCalcOptions = [
    { value: 100000, label: '十万' },
    { value: 1000000, label: '百万' },
    { value: 10000000, label: '千万' },
  ];

  const colOptions = [
    {
      label: '营业收入',
      value: '营业收入',
    },
    {
      label: '报表日期',
      value: '报表日期',
    },
  ];

  const [oData, setOData] = useState<Array<any>>([]);
  const [displayOData, setDisplayOData] = useState<Array<any>>([]);
  const [reGenCol, setReGenCol] = useState<string | null>('营业收入');
  const [reGenCalcNum, setReGenCalcNum] = useState<number | null>(1000000);
  const reGenCalcLabel = reGenCalcOptions.find((item) => item.value === reGenCalcNum)?.label;
  const [reGenData, setReGenData] = useState<Array<any>>([]);

  const [indexColName, setIndexColName] = useState(colOptions[1].value);

  const handleRead = async () => {
    const ctt = await dataProcessPoster('data');

    const newCtt = cloneDeep(ctt).map((item: Record<string, any>) => {
      if (!indexColName) return item;
      item[indexColName + '(索引列)'] = item[indexColName];
      delete item[indexColName];
      return item;
    });

    setOData(ctt);
    setDisplayOData(newCtt);
  };

  const reGenColOptions = Object.keys(oData[0] || {}).map((key) => ({ label: key, value: key }));
  const handleReGen = async () => {
    if (!reGenCalcNum) return;

    const rD = cloneDeep(oData).map((item: Record<string, any>) => {
      if (reGenCol === '报表日期') {
        item[`报表日期(${reGenCalcLabel})`] = '错误: 日期无法参与运算';
        delete item['报表日期'];
      } else {
        item[`营业收入(${reGenCalcLabel})`] = (item['营业收入'] / reGenCalcNum).toFixed(4) + ' ' + reGenCalcLabel;
        delete item['营业收入'];
      }
      return item;
    });

    setReGenData(rD);
  };

  const handleReset = () => {
    setOData([]);
    setDisplayOData([]);
    setReGenData([]);
    setReGenCol('营业收入');
    setReGenCalcNum(1000000);
  };

  return (
    <div>
      <ResetBtn onClick={handleReset} />
      <div className="border-y py-2">
        <CapTitle className="mb-2" index={1} title="读取原始数据" />
        <LabelText label="设置索引列" />
        <Select style={{ width: 150 }} value={indexColName} onChange={setIndexColName} options={colOptions} />
        <br />
        <TooltipBtn className="my-2" type="primary" onClick={handleRead} tip="运用pd.read_excel函数读取原始数据文件，进行数据描述性统计。">
          读取数据
        </TooltipBtn>

        {oData.length > 0 ? (
          <>
            <ResultDisplay type="table" title="读取的原始数据" data={displayOData} />
            <CapTitle className="my-2" index={2} title="处理原始数据" />
            <div>
              <span>为方便数据展示和查看，设置</span>
              <Select
                style={{ marginLeft: '8px', marginRight: '8px', width: 150 }}
                value={reGenCol}
                onChange={setReGenCol}
                options={reGenColOptions}
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

        {reGenData.length > 0 ? <ResultDisplay type="table" title="处理后的数据" data={reGenData} /> : null}
      </div>
    </div>
  );
}
