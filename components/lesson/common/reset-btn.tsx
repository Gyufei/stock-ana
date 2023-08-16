import { Button } from 'antd';

export default function ResetBtn({ onClick }: { onClick: () => void }) {
  return (
    <div className="mb-2 text-xs flex justify-end">
      <Button onClick={onClick} danger>
        重置
      </Button>
    </div>
  );
}
