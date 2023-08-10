import { Select } from 'antd';
import fetcher from '@/lib/fetcher';
import useSWRMutation from 'swr/mutation';
import { CSSProperties } from 'react';

export function StockSearchSelect({ value, onChange, style }: { value: string; onChange: (_v: string) => void; style: CSSProperties }) {
  const searchFetcher = async (url: string, { arg: q }: any) => {
    const res = await fetcher(`${url}?q=${q}`);

    return res;
  };

  const { data: options, trigger: triggerSearch } = useSWRMutation('/api/stock', searchFetcher);

  const handleSearch = (str: string) => {
    triggerSearch(str as any);
  };

  return (
    <Select
      showSearch
      value={value}
      placeholder="请输入股票代码或名称"
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={(e) => handleSearch(e)}
      style={style}
      onChange={onChange}
      notFoundContent={null}
      options={(options || []).map((d: any) => ({
        value: d.Stkcd,
        label: d.Stknme,
      }))}
    />
  );
}
