import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const UserDropdown = () => {
  const items: MenuProps['items'] = [
    {
      label: (
        <a
          className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'}
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a
          className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'}
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
      ),
      key: '1',
    },
    {
      label: (
        <a
          href="#pablo"
          className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'}
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
      ),
      key: '2',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <a
          href="#pablo"
          className={'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'}
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      ),
      key: '3',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <a className="text-blueGray-500 block" onClick={(e) => e.preventDefault()}>
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <img alt="..." className="w-full rounded-full align-middle border-none shadow-lg" src="/img/team-1-800x800.jpg" />
          </span>
        </div>
      </a>
    </Dropdown>
  );
};

export default UserDropdown;
