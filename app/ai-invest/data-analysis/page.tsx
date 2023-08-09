'use client';

import { useState } from 'react';
import useSWR from 'swr';
import type { UploadProps, RadioChangeEvent } from 'antd';
import { Radio, Select, Button, message, Upload } from 'antd';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import fetcher from '@/lib/fetcher';
import SourceGrid from '@/components/ai-invest/source-grid';

const props: UploadProps = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default function DataAnalysis() {
  const onTypeChange = (e: RadioChangeEvent) => {
    setSelectType(e.target.value);
  };

  const handleChange = (value: string) => {
    setSelectTable(value);
  };

  const [selectedType, setSelectType] = useState('mysql');
  const [selectedTable, setSelectTable] = useState('trd_co');

  const sourceType = [
    { label: 'Mysql', value: 'mysql' },
    { label: 'Excel', value: 'excel' },
  ];

  const { data: tableData } = useSWR(() => {
    if (selectedTable) {
      return `/api/${selectedTable}`;
    }
    return null;
  }, fetcher);

  const tableList = [
    {
      label: '股票汇总表 ',
      value: 'trd_co',
    },
  ];

  return (
    <div className="p-2 flex flex-col h-[900px]">
      <div className="px-10 pt-5 flex items-center gap-x-3">
        <div>
          <span className="mr-4">数据集:</span>
          <Radio.Group onChange={onTypeChange} value={selectedType}>
            {sourceType.map((item) => {
              return (
                <Radio.Button key={item.value} value={item.value}>
                  {item.label}
                </Radio.Button>
              );
            })}
          </Radio.Group>
        </div>

        {selectedType === 'mysql' && (
          <div>
            <span className="mr-4">表名:</span>
            <Select value={selectedTable} style={{ width: 120 }} onChange={handleChange} options={tableList} />
          </div>
        )}

        {selectedType === 'excel' && (
          <div>
            <span className="mr-4">文件名:</span>
            <Upload {...props}>
              <Button icon={<i className="fa-solid fa-upload"></i>}>上传Excel</Button>
            </Upload>
          </div>
        )}
      </div>

      <SourceGrid data={tableData} />
    </div>
  );
}
