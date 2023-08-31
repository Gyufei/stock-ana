import { Button } from 'antd';

export default function ResetBtn({ onClick, className }: { onClick: () => void; className?: string }) {
  return (
    <div className={`mb-2 text-xs flex justify-start ${className || ''}`}>
      <Button size="small" onClick={onClick} danger>
        重置
      </Button>
    </div>
  );
}
