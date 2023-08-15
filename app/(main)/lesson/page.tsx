'use client';
import { Card } from 'antd';
import { useRouter } from 'next/navigation';

const gridStyle: React.CSSProperties = {
  width: '25%',
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary)',
};

export default function Lesson() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/lesson/arima');
  };

  return (
    <Card title="课程列表">
      <Card.Grid onClick={() => handleClick()} style={gridStyle}>
        基于ARIMA模型的营业收入预测
      </Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>

      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
      <Card.Grid style={gridStyle}></Card.Grid>
    </Card>
  );
}
