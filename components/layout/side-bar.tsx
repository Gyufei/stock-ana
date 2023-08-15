'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { usePathname, useRouter } from 'next/navigation';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const routes = ['/ai-invest', '/lesson'];

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState(['1']);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const index = routes.findIndex((route) => path.includes(route));
    setSelectedKey([String(index + 1)]);
  }, [path]);

  const items: Array<MenuItem> = useMemo(
    () => [
      {
        key: '1',
        label: '智能投资',
        icon: <i className="fa-solid fa-money-bill" />,
        onClick: () => router.push('/ai-invest/data-analysis'),
      },
      {
        key: '2',
        label: '课程实例',
        icon: <i className="fa-solid fa-person-chalkboard" />,
        onClick: () => router.push('/lesson'),
      },
      {
        key: '3',
        label: '通用算法',
        icon: <i className="fa-solid fa-toolbox" />,
      },
    ],
    []
  );

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="h-screen">
      {!collapsed && <div className="text-lg h-14 flex items-center justify-center text-white">智能会计平台</div>}
      <Menu theme="dark" selectedKeys={selectedKey} onClick={({ key }) => setSelectedKey([key])} mode="inline" items={items} />
    </Sider>
  );
}