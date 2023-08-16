'use client';

import { useState } from 'react';
import useSWR from 'swr';
import type { UploadProps } from 'antd';
import * as XLSX from 'xlsx';
import { Radio, Select, Button, message, Upload } from 'antd';

import fetcher from '@/lib/fetcher';
import { PathMap } from '@/lib/path-map';
import useSWRMutation from 'swr/mutation';
import Grid from '@/components/share/grid';

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

  const saveDataSet = async (url: string, { arg }: any) => {
    const res = await fetcher(`${PathMap.saveDataSet}`, {
      method: 'POST',
      body: JSON.stringify({
        name: arg.title,
        content: JSON.stringify(arg.data),
        type: 1,
      }),
    });

    message.success(`数据集${arg.title}保存成功`);

    return res;
  };

  const { trigger: saveTrigger } = useSWRMutation(`${PathMap.saveDataSet}`, saveDataSet);

  return (
    <div className="p-2 flex flex-col h-[850px]">
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

      <Grid data={selectedType === 'mysql' ? tableData : excelData} saveData={saveTrigger} />
    </div>
  );
}
