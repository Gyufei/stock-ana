import LabelText from '@/components/share/label-text';
import { Input } from 'antd';

export interface IImageConfig {
  x: string;
  y: string;
  title: string;
  [key: string]: any;
}

export default function ImageConfig({
  config,
  setConfig,
  children,
}: {
  config: IImageConfig;
  setConfig: (_c: IImageConfig) => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="my-2">
      <div className="inline-flex flex-wrap items-center mb-2">
        <LabelText className="w-8" label="标题" />
        <Input
          id="标题"
          className="w-64"
          value={config.x}
          onChange={(e) => {
            setConfig({ ...config, x: e.target.value });
          }}
        />
        <LabelText className="w-14 ml-4" label="X轴名称" />
        <Input
          id="X轴名称"
          className="w-64"
          value={config.y}
          onChange={(e) => {
            setConfig({ ...config, y: e.target.value });
          }}
        />
        <LabelText className="w-14 ml-4" label="Y轴名称" />
        <Input
          id="Y轴名称"
          className="w-64"
          value={config.title}
          onChange={(e) => {
            setConfig({ ...config, title: e.target.value });
          }}
        />
      </div>
      {children}
    </div>
  );
}
