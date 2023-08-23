import { Button, Modal } from 'antd';
import { useAtomValue } from 'jotai';
import { useCallback, useState } from 'react';
import { filesAtom } from '../lesson/arima-data-ana/state';

export function DownloadBtn() {
  const files = useAtomValue(filesAtom);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button size="small" type="default" disabled={!files.length} className="bg-primary w-20 mt-3" onClick={handleClick}>
        下载
      </Button>

      <Modal title="下载列表" footer={null} open={isModalOpen} onCancel={handleCancel}>
        {files.map((file) => {
          return (
            <div key={file.name} className="p-4 border my-2 rounded-md">
              {(() => {
                switch (file.type) {
                  case 'file':
                    return <a href={file.link}>{file.name}</a>;
                  case 'image': {
                    const href = URL.createObjectURL(new Blob([file.link], { type: 'image/png' }));

                    return (
                      <a href={href} download={file.name + '.png'}>
                        {file.name}
                      </a>
                    );
                  }

                  default:
                    break;
                }
              })()}
            </div>
          );
        })}
      </Modal>
    </>
  );
}
