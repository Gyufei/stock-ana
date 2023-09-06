import Link from 'next/link';
import { Button } from 'antd';

export default function Arima() {
  return (
    <div className="p-4 flex flex-col justify-stretch w-full h-full">
      <div className="mt-10 px-10">
        <div className="border p-4 rounded-md mb-4">
          <div className="text-primary text-2xl mb-4">ARIMA模型介绍</div>
          <div>
            <Link href="/lesson/arima/desc/experiment">
              <Button className="mr-4" type="default">
                课程实验
              </Button>
            </Link>

            <Link href="/lesson/arima/desc/practice">
              <Button type="default">课堂练习</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
