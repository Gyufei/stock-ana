import { Button, Tooltip } from 'antd';

export default function TooltipBtn({
  children,
  onClick,
  tip,
  type,
  className,
}: {
  type: 'link' | 'text' | 'primary' | 'default' | 'dashed' | undefined;
  tip: string;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) {
  return (
    <Tooltip title={tip}>
      <Button className={`${className}`} onClick={onClick} type={type}>
        {children}
        <i className="mx-1 fa-solid fa-circle-info"></i>
      </Button>
    </Tooltip>
  );
}
