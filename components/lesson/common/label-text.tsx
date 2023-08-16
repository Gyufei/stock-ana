import { Tooltip } from 'antd';

export default function LabelTitle({ label, tip, className }: { label: string; tip?: string; className?: string }) {
  return (
    <label htmlFor={label} className={`mr-2 ${className}`}>
      {tip ? (
        <Tooltip title={tip}>
          {label}:<i className="mx-1 fa-solid fa-circle-info"></i>
        </Tooltip>
      ) : (
        <>{label}:</>
      )}
    </label>
  );
}
