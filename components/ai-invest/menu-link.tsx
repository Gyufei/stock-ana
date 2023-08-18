'use client';

import { Menu } from 'antd';
import Link from 'next/link';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MenuLink() {
  const items: MenuProps['items'] = [
    {
      label: '课程简介',
      key: 'lesson-desc',
      icon: <i className="fa-solid fa-person-chalkboard"></i>,
      children: [
        {
          label: '课程背景',
          key: 'lesson-background',
        },
        {
          label: '课程目标',
          key: 'lesson-target',
        },
      ],
    },
    {
      label: <Link href="/ai-invest/data-analysis">数据分析</Link>,
      key: 'data-analysis',
      icon: <i className="fa-solid fa-database"></i>,
    },
    {
      label: <Link href="/ai-invest/ai-pick-stock">智能选股</Link>,
      key: 'ai-pick-stock',
      icon: <i className="fa-solid fa-crosshairs"></i>,
    },
    {
      label: <Link href="/ai-invest/ai-trade">智能交易</Link>,
      key: 'ai-trade',
      icon: <i className="fa-solid fa-compass"></i>,
    },
    {
      label: <Link href="/ai-invest/ai-predict">智能预测</Link>,
      key: 'ai-predict',
      icon: <i className="fa-solid fa-money-bill-trend-up"></i>,
    },
    {
      label: <Link href="/ai-invest/policy-library">策略库</Link>,
      key: 'policy-library',
      icon: <i className="fa-solid fa-book"></i>,
    },
  ];

  const pathname = usePathname();
  const [current, setCurrent] = useState('');
  useEffect(() => {
    setCurrent(pathname.split('/')[2]);
  }, [pathname]);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
