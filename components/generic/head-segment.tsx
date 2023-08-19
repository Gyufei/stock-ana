'use client';

import { Segmented } from 'antd';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function HeadSegment() {
  const router = useRouter();
  const path = usePathname();
  const routes = ['/generic/classification', '/generic/regression'];

  useEffect(() => {
    for (const r of routes) {
      if (path.includes(r)) {
        setSelected(r);
        break;
      }
    }
  }, [path]);

  const options = [
    {
      label: '分类算法',
      value: routes[0],
      icon: <i className="fa-solid fa-ethernet"></i>,
    },
    {
      label: '回归算法',
      value: routes[1],
      icon: <i className="fa-solid fa-retweet"></i>,
    },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const onChange = (val: any) => {
    setSelected(val);
    router.push(val);
  };

  return (
    <div className="bg-blue-200 p-4 rounded-lg">
      <Segmented block value={selected} onChange={onChange} size="large" options={options} />
    </div>
  );
}
