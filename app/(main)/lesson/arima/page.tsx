import Link from 'next/link';
import { Button } from 'antd';

export default function Arima() {
  return (
    <div className="p-4 flex flex-col justify-stretch w-full h-full">
      <div className="flex items-center mb-3 cursor-pointer">
        <Link href="/lesson" className="text-black hover:text-primary">
          <i className="text-sm fa-solid fa-arrow-left mr-1"></i>
          <span className="text-sm">基于ARIMA模型的营业收入预测</span>
        </Link>
      </div>
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

        <div className="border p-4 rounded-md mb-4">
          <div className="text-primary text-2xl mb-4">数据预处理与分析</div>
          <div>
            <Link href="/lesson/arima/data-ana/experiment">
              <Button className="mr-4" type="default">
                课程实验
              </Button>
            </Link>

            <Link href="/lesson/arima/data-ana/practice">
              <Button type="default">课堂练习</Button>
            </Link>
          </div>
        </div>

        <div className="border p-4 rounded-md">
          <div className="text-primary text-2xl mb-4">建立ARIMA模型</div>
          <div>
            <Link href="/lesson/arima/build-model/experiment">
              <Button className="mr-4" type="default">
                课程实验
              </Button>
            </Link>
            <Link href="/lesson/arima/build-model/experiment">
              <Button type="default">课堂练习</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
