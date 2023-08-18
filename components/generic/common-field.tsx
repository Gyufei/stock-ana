import { Select } from 'antd';
import LabelText from '../share/label-text';

export default function CommonField({
  options,
  features,
  setFeatures,
  target,
  setTarget,
}: {
  options: any[];
  features: string[];
  setFeatures: (_f: string[]) => void;
  target: string | undefined;
  setTarget: (_t: string) => void;
}) {
  return (
    <div className="flex">
      <div className="flex items-center">
        <LabelText label="特征列" tip="用于区分不同类别或不同样本数据的列" />
        <Select
          value={features}
          onChange={setFeatures}
          mode="multiple"
          style={{ width: 220 }}
          options={options}
          fieldNames={{ label: 'title', value: 'title' }}
        ></Select>
      </div>
      <div className="flex items-center mx-4">
        <LabelText label="目标列" tip="希望模型学习和预测的变量" />
        <Select
          value={target}
          onChange={setTarget}
          style={{ width: 220 }}
          options={options}
          fieldNames={{ label: 'title', value: 'title' }}
        ></Select>
      </div>
    </div>
  );
}
