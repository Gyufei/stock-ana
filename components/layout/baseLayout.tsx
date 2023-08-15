'use client';

import React from 'react';
import { Layout } from 'antd';
import SideBar from '@/components/layout/side-bar';

const { Content } = Layout;

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout hasSider>
      <SideBar />
      <Content>{children}</Content>
    </Layout>
  );
}
