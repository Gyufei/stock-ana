import { PathMap } from '@/lib/http/path-map';
import { Button } from 'antd';

export default function DownloadPDFBtn() {
  function downloadFile(url: string, filename: string) {
    // 创建一个隐藏的<a>标签
    var link = document.createElement('a');
    link.href = url;
    link.download = filename;

    // 添加到文档中
    document.body.appendChild(link);

    // 模拟点击下载
    link.click();

    // 清理
    document.body.removeChild(link);
  }

  const handleDownloadPdf = () => {
    downloadFile(PathMap.lessonArima + '/pdf', '实验报告.pdf');
  };
  return (
    <>
      <Button type="default" onClick={handleDownloadPdf}>
        实验报告
      </Button>
    </>
  );
}
