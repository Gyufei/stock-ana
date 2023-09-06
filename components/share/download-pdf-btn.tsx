import { useLessonPoster } from '@/lib/http/lesson-poster';
import { PathMap } from '@/lib/http/path-map';
import { Button } from 'antd';

export default function DownloadPDFBtn() {
  const { poster } = useLessonPoster();

  const handleDownloadPdf = async () => {
    const title = '实验报告';
    const res = await poster(PathMap.sharePath + '/get_model_pdf/', {
      title,
    });

    const blob = res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = title + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Button type="default" onClick={handleDownloadPdf}>
        实验报告
      </Button>
    </>
  );
}
