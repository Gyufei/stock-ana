import CodeDisplayDrawer from '@/components/share/code-display-drawer';
import { Tooltip } from 'antd';
import { useState } from 'react';

export default function CapTitle({
  title,
  index,
  code,
  tip,
  className,
}: {
  title: string;
  index?: number;
  tip?: string;
  code?: string | string[];
  className?: string;
}) {
  const [showDialog, setShowDialog] = useState(false);

  const titleStr = index ? `${index}.${title}` : title;

  return (
    <>
      <div className={`font-bold flex items-center justify-between ${className}`}>
        <div>
          {tip ? (
            <Tooltip title={tip}>
              {titleStr}
              <i className="mx-1 fa-solid fa-circle-info"></i>
            </Tooltip>
          ) : (
            <>{titleStr}</>
          )}
        </div>

        {code && (
          <i
            className="fa-solid fa-code cursor-pointer"
            onClick={(event) => {
              setShowDialog(true);
              event.stopPropagation();
            }}
          />
        )}
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <CodeDisplayDrawer open={showDialog} setShow={setShowDialog} code={code || []} />
      </div>
    </>
  );
}
