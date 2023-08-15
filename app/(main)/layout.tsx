import React from 'react';
import BaseLayout from '@/components/layout/baseLayout';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <BaseLayout>{children}</BaseLayout>;
}
