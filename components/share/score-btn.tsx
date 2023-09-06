import { useLessonPoster } from '@/lib/http/lesson-poster';
import { PathMap } from '@/lib/http/path-map';
import { Button, Card, Modal, Rate, Spin, Statistic } from 'antd';
import { useCallback, useState } from 'react';

export function ScoreBtn() {
  const { poster, isLoading } = useLessonPoster();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
    getScore();
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [score, setScore] = useState(0);

  const getScore = async () => {
    const res = await poster(`${PathMap.utilsPath}/score/`);
    setScore(res.data.score);
  };

  return (
    <>
      <Button size="middle" type="primary" className="bg-primary w-20" onClick={handleClick}>
        得分统计
      </Button>

      <Modal title="得分统计" footer={null} open={isModalOpen} onCancel={handleCancel}>
        <Card className="mt-4">
          <Spin tip="正在计算得分中" spinning={isLoading}>
            <Statistic
              title="当前得分"
              value={isLoading ? undefined : score}
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
