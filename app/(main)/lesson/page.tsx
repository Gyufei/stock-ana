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
  fontSize: '1rem',
  cursor: 'pointer',
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
      <Card.Grid style={gridStyle}>费用核算与管理的实战应用</Card.Grid>
      <Card.Grid style={gridStyle}>往来核算与管理的实战应用</Card.Grid>

      <Card.Grid style={gridStyle}>成本核算与管理的实战应用</Card.Grid>
      <Card.Grid style={gridStyle}>全面预算管理的实战应用</Card.Grid>
      <Card.Grid style={gridStyle}>企业财务综合分析的实战应用</Card.Grid>
    </Card>
  );
}
