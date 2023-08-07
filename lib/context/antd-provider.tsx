import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import theme from '@/app/theme/theme-config';

export default function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider locale={zhCN} theme={theme}>
      {children}
    </ConfigProvider>
  );
}
