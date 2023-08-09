'use client';

import { useState } from 'react';
import useSWR from 'swr';
import type { UploadProps } from 'antd';
import * as XLSX from 'xlsx';
import { Radio, Select, Button, message, Upload } from 'antd';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import fetcher from '@/lib/fetcher';
import SourceGrid from '@/components/ai-invest/source-grid';

export default function DataAnalysis() {
  const sourceType = [
    { label: 'Mysql', value: 'mysql' },
    { label: 'Excel', value: 'excel' },
  ];

  const tableList = [
    {
      label: '股票汇总表 ',
      value: 'trd_co',
    },
  ];

  const [selectedType, setSelectType] = useState('mysql');
  const [selectedTable, setSelectTable] = useState('trd_co');
  const [excelData, setExcelData] = useState<Array<Record<string, any>>>([]);

  const props: UploadProps = {
    name: 'file',
    accept: '.xlsx, .xls',
    maxCount: 1,
    beforeUpload: (file) => {
      message.success(`${file.name} 文件上传成功`);

      const reader = new FileReader();
      reader.onload = function (e: any) {
        const data = e.target.result;

        const workbook = XLSX.read(data, { type: 'binary' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);

        setExcelData(json as any);
      };

      reader.readAsBinaryString(file);

      return false;
    },
  };

  const { data: tableData } = useSWR(() => {
    if (selectedTable) {
      return `/api/${selectedTable}`;
    }
    return null;
  }, fetcher);

  return (
    <div className="p-2 flex flex-col h-[900px]">
      <div className="px-10 pt-5 flex items-center gap-x-3">
        <div className="flex items-center">
          <span className="mr-4">数据集:</span>
          <Radio.Group onChange={(e) => setSelectType(e.target.value)} value={selectedType}>
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
            <Select value={selectedTable} style={{ width: 120 }} onChange={setSelectTable} options={tableList} />
          </div>
        )}

        {selectedType === 'excel' && (
          <div className="upload-control flex items-center">
            <span className="mr-4">文件名:</span>
            <Upload {...props}>
              <Button icon={<i className="fa-solid fa-upload"></i>}>上传Excel</Button>
            </Upload>
          </div>
        )}
      </div>

      <SourceGrid data={selectedType === 'mysql' ? tableData : excelData} />
    </div>
  );
}
