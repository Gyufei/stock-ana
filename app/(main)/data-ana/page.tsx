'use client';

import useSWR from 'swr';
import type { UploadProps } from 'antd';
import * as XLSX from 'xlsx';
import { message, Button, Table, Space, Upload } from 'antd';

import fetcher from '@/lib/http/fetcher';
import useSWRMutation from 'swr/mutation';
import { PathMap } from '@/lib/http/path-map';
import { useRouter } from 'next/navigation';

const { Column } = Table;

interface DataType {
  id: React.Key;
  name: string;
  content: string;
  type: string;
}

export default function DataAnalysis() {
  const router = useRouter();

  const { data: datasets, mutate: fetchSets, isLoading: isDatasetLoading } = useSWR(`/api/dataset?type=${2}`, fetcher);

  const saveDataSet = async (url: string, { arg }: any) => {
    const res = await fetcher(`${PathMap.saveDataSet}`, {
      method: 'POST',
      body: JSON.stringify({
        name: arg.title,
        content: JSON.stringify(arg.data),
        type: 1,
      }),
    });

    message.success(`上传保存成功`);
    fetchSets();

    return res;
  };

  const { trigger: saveTrigger } = useSWRMutation(`${PathMap.saveDataSet}`, saveDataSet);

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

        saveTrigger({ title: file.name, data: json } as any);
      };

      reader.readAsBinaryString(file);

      return false;
    },
  };

  const handleRowClick = (r: DataType) => {
    router.push(`/data-ana/${r.id}`);
  };

  return (
    <div className="p-2 flex flex-col h-[850px]">
      <div className="py-5 flex items-center gap-x-3">
        <div className="flex w-full justify-between items-center">
          <div className="text-xl">选择数据集</div>
          <div className="upload-control flex items-center">
            <Upload {...props}>
              <Button icon={<i className="fa-solid fa-upload"></i>}>上传Excel</Button>
            </Upload>
          </div>
        </div>
      </div>

      <Table dataSource={datasets} loading={isDatasetLoading}>
        <Column title="名称" dataIndex="name" key="name" />
        <Column
          title="Action"
          key="action"
          width="200px"
          render={(_: any, r: DataType) => (
            <Space size="middle">
              <a onClick={() => handleRowClick(r)}>处理</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}
