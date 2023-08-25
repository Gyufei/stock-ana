import { Button, Card, Modal, Rate, Spin, Statistic } from 'antd';
import { useCallback, useEffect, useState } from 'react';

export function ScoreBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      const score = Math.floor(Math.random() * 41) + 60;
      setScore(score);
    }, 2000);
  }, []);

  return (
    <>
      <Button size="middle" type="primary" className="bg-primary w-20" onClick={handleClick}>
        得分统计
      </Button>

      <Modal title="得分统计" footer={null} open={isModalOpen} onCancel={handleCancel}>
        <Card className="mt-4">
          <Spin tip="正在计算得分中" spinning={loading}>
            <Statistic
              title="当前得分"
              value={loading ? undefined : score}
              prefix={<i className="fa-solid fa-thumbs-up text-[#fadb12] mr-2"></i>}
              suffix="/ 100"
            />
            <Rate className="mt-3" count={10} allowClear={false} value={Math.floor(score / 10)} disabled />
          </Spin>
        </Card>
      </Modal>
    </>
  );
}
