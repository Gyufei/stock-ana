import { useState } from 'react';
import LabelText from '@/components/share/label-text';
import { useDataToTable as useDataToTable } from '@/lib/hook/use-data-to-table';
import { InputNumber, Table, Collapse, CollapseProps, Image, Tooltip, Alert } from 'antd';
import { SaveFileBtn } from '@/components/share/save-file-btn';
import { ResultDescInputBtn } from './result-desc-input-btn';
import { IPosterData } from '@/lib/hook/use-poster-data';
import { useAtomValue } from 'jotai';
import { commentsAtom } from '@/lib/states/lesson-arima-state';

function ImageDisplay({ data }: { data: Array<IPosterData> }) {
  const ImgItems = ({ img }: { img: Record<string, any> }) => {
    return (
      <div className="flex flex-col justify-center">
        {img.title ? (
          <div className="mb-2 text-center">
            {img.tip ? (
              <Tooltip title={img.tip}>
                {img.title}
                <i className="mx-1 fa-solid fa-circle-info"></i>
              </Tooltip>
            ) : (
              img.title
            )}
          </div>
        ) : null}
        <Image key={img.title} src={img.data} width={500} height={200} alt={img.title} />
        <SaveFileBtn type="image" link={img.data} defaultVal={img.title} />
      </div>
    );
  };

  return (
    <div className="flex w-full overflow-x-auto gap-2">
      {data.map((img) => {
        return <ImgItems key={img.title} img={img} />;
      })}
    </div>
  );
}

function TableDataDisplay({ data }: { data: Array<IPosterData> }) {
  return (
    <div className="mb-2">
      {data.map((d, i) => {
        return <TableDataSingleDisplay key={i} data={d} />;
      })}
    </div>
  );
}

function TableDataSingleDisplay({ data }: { data: IPosterData }) {
  const [num, setNum] = useState<number | null>(5);
  const { content, columns: cols } = useDataToTable(data.data || []);
  const sourceData = content.slice(0, num || 5);

  return (
    <div>
      <div className="flex items-center mb-2">
        <LabelText label="展示前" />
        <InputNumber id="randomNum" min={1} value={num} onChange={(e) => setNum(e || null)} />
        <span className="ml-2">行</span>
      </div>
      <Table size="small" pagination={false} bordered dataSource={sourceData} columns={cols}></Table>
    </div>
  );
}

function JsonDataDisplay({ data }: { data: Array<Record<string, any>> }) {
  const isArray = Array.isArray(data);
  const displayStr = (d: any) => JSON.stringify(d, null, 1).replace(/,\s+/g, ',');

  const Item = ({ dObj }: { dObj: Record<string, any> }) => {
    return (
      <div
        className="flex-1 break-words border p-4 h-[200px] overflow-y-auto"
        style={{
          width: isArray ? `${100 / data.length - 1}%` : '100%',
        }}
      >
        {dObj.title ? (
          <div className="mb-2 text-center border-b">
            {dObj.tip ? (
              <Tooltip title={dObj.tip}>
                {dObj.title}
                <i className="mx-1 fa-solid fa-circle-info"></i>
              </Tooltip>
            ) : (
              dObj.title
            )}
          </div>
        ) : null}

        <pre>{displayStr(dObj.data)}</pre>
      </div>
    );
  };

  return (
    <div className="mb-4 w-full flex justify-start items-start gap-2 flex-wrap">
      {data.map((d: any, i: any) => (
        <Item key={i} dObj={d} />
      ))}
    </div>
  );
}

function ErrorDisplayBase({ data }: { data: Record<string, any> }) {
  const errorFirst = data[0];
  return (
    <>
      <div className="text-lg">{errorFirst.title || '发生错误!'} </div>
      <div className="text-red-600">{errorFirst.error}</div>
    </>
  );
}

export default function ResultDisplay({
  keyName,
  title,
  data,
  type,
  children,
}: {
  keyName?: string;
  title: string;
  data: Array<IPosterData>;
  type: 'image' | 'table' | 'json' | 'error';
  children?: React.ReactNode;
}) {
  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: (
        <div className="flex items-center gap-x-4">
          <div>{title}</div>
          {keyName && <ResultDescInputBtn keyName={keyName} />}
        </div>
      ),
      children: (
        <>
          {children}
          {(() => {
            switch (type) {
              case 'image':
                return <ImageDisplay data={data} />;
              case 'table':
                return <TableDataDisplay data={data} />;
              case 'json':
                return <JsonDataDisplay data={data} />;
              case 'error':
                return <ErrorDisplayBase data={data} />;
              default:
                return null;
            }
          })()}
        </>
      ),
    },
  ];

  const co = useAtomValue(commentsAtom);
  const comment = co?.[keyName || ''] || null;

  return (
    <>
      <Collapse defaultActiveKey="1" items={chartCon} />
      {comment && <Alert className="mt-2" type="info" showIcon message="结论" description={comment} />}
    </>
  );
}
