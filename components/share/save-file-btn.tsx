import { Button, Input, Modal, message } from 'antd';
import { useSetAtom } from 'jotai';
import { useCallback, useState } from 'react';
import { filesAtom } from '../../lib/states/lesson-arima-state';

export function SaveFileBtn({ link, type, defaultVal }: { link: string; type: 'file' | 'image'; defaultVal?: string }) {
  const setFileAtom = useSetAtom(filesAtom);

  const [inputValue, setInputValue] = useState(defaultVal);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSave = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    if (!inputValue) {
      message.error('请输入名称');
      return;
    }

    setIsModalOpen(false);

    setFileAtom((prev) => {
      return [...prev, { name: inputValue, type, link }];
    });
  };

  return (
    <>
      <Button disabled={!link} className="bg-primary w-20 mt-3" type="default" size="small" onClick={onSave}>
        保存
      </Button>

      <Modal title="保存" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="flex items-center mt-3">
          <div className="mr-5 whitespace-nowrap">名称:</div>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
      </Modal>
    </>
  );
}
