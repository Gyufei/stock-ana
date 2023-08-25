import { DownloadBtn } from './download-btn';
import DownloadPdfBtn from './download-pdf-btn';
import { ScoreBtn } from './score-btn';

export default function CommonBtn() {
  return (
    <div className="flex items-center gap-x-2">
      <ScoreBtn />
      <DownloadBtn />
      <DownloadPdfBtn />
    </div>
  );
}
