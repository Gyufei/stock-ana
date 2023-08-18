import { ColumnsType } from 'antd/es/table';
import { useMemo } from 'react';

export function useDatasetContent(datasetContent: Array<any>) {
  const content = useMemo(
    () =>
      datasetContent
        ? datasetContent.map((row: Record<string, any>, index: number) => ({
            ...row,
            key: (row.id || 0) + index,
          }))
        : [],
    [datasetContent]
  );

  const columns: ColumnsType<any> = useMemo(
    () =>
      Object.keys(datasetContent[0] || {}).map((key: string, index) => {
        return {
          title: key,
          dataIndex: key,
          key: key + index,
        };
      }),
    [datasetContent]
  );

  return { content, columns };
}
