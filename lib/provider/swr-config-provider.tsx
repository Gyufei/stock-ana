'use client';

import { SWRConfig } from 'swr';
// import { message } from 'antd';

export default function SWRConfigProvider({ children }: { children: React.ReactNode }) {
  // const [messageApi] = message.useMessage();

  return (
    <SWRConfig
      value={{
        onError: (_e) => {
          // messageApi.open({
          //   type: 'error',
          //   content: `${error.status}: ${error.info}`,
          // });
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
