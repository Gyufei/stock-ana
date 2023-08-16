import { Tooltip } from 'antd';

export default function DataDisplay({ displayData }: { displayData: Array<Record<string, any>> }) {
  const isArray = Array.isArray(displayData);
  const displayStr = (d: any) => JSON.stringify(d, undefined, 2);

  const Item = ({ dObj }: { dObj: Record<string, any> }) => {
    return (
      <div
        className="flex-1 break-words border p-4 h-[200px] overflow-y-auto"
        style={{
          width: isArray ? `${100 / displayData.length - 1}%` : '100%',
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
      {displayData.map((d: any, i: any) => (
        <Item key={i} dObj={d} />
      ))}
    </div>
  );
}
