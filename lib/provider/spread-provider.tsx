'use client';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-resources-zh';
import { useEffect } from 'react';

export default function SpreadProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    GC.Spread.Common.CultureManager.culture('zh-cn');
  });

  return <>{children}</>;
}
