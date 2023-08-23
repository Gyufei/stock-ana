import { useState } from 'react';
import LabelText from '@/components/share/label-text';
import { useDataToTable as useDataToTable } from '@/lib/hook/use-data-to-table';
import { InputNumber, Table, Collapse, CollapseProps, Image, Tooltip } from 'antd';
import { SaveFileBtn } from '@/components/share/save-file-btn';

function ImageDisplayBase({ images }: { images: Array<Record<string, any>> }) {
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
        <Image key={img.name} src={img.src || `/img/${img.name}.png`} width={500} height={200} alt={img.name} />
        <SaveFileBtn type="image" link={img.src} defaultVal={img.name} />
      </div>
    );
  };

  return (
    <div className="flex w-full overflow-x-auto gap-2">
      {images.map((img) => {
        return <ImgItems key={img.name} img={img} />;
      })}
    </div>
  );
}

function TableDataDisplayBase({ data }: { data: Array<any> }) {
  const [num, setNum] = useState<number | null>(5);

  const { content, columns: cols } = useDataToTable(data || []);

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

function JsonDataDisplayBase({ data }: { data: Array<Record<string, any>> }) {
  const isArray = Array.isArray(data);
  const displayStr = (d: any) => JSON.stringify(d, undefined, 2);

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

        {displayStr(dObj.data)}
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

function ErrorDisplayBase({ errorObj }: { errorObj: Record<string, any> }) {
  return (
    <>
      <div className="text-lg">{errorObj.title || '发生错误!'} </div>
      <div className="text-red-600">{errorObj.text}</div>
    </>
  );
}

export default function ResultDisplay({
  title,
  data,
  type,
  children,
}: {
  title: string;
  data: Array<Record<string, any>>;
  type: 'image' | 'table' | 'json' | 'error';
  children?: React.ReactNode;
}) {
  const chartCon: CollapseProps['items'] = [
    {
      key: '1',
      label: title,
      children: (
        <>
          {children}
          {(() => {
            switch (type) {
              case 'image':
                return <ImageDisplayBase images={data} />;
              case 'table':
                return <TableDataDisplayBase data={data} />;
              case 'json':
                return <JsonDataDisplayBase data={data} />;
              case 'error':
                return <ErrorDisplayBase errorObj={data[0]} />;
              default:
                return null;
            }
          })()}
        </>
      ),
    },
  ];

  return <Collapse defaultActiveKey="1" items={chartCon} />;
}
