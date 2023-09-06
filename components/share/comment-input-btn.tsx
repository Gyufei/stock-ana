import { Button, Modal, Tooltip } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';
import { useComments } from '@/lib/hook/use-comment';

export function CommentInputBtn({ keyName }: { keyName: string }) {
  const { comments, handleSetComments } = useComments();
  const co = comments?.[keyName];

  const [coText, setCoText] = useState(co || '');
  const [showModal, setShowModal] = useState(false);

  const handleOk = () => {
    if (coText) {
      handleSetComments({
        ...comments,
        [keyName]: coText,
      });
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {!coText ? (
        <Button
          className="flex items-center justify-between"
          onClick={() => {
            setShowModal(true);
          }}
        >
          添加结论
        </Button>
      ) : (
        <Tooltip title={`结论: ${coText}`}>
          <Button
            className="flex items-center justify-between"
            onClick={() => {
              setShowModal(true);
            }}
          >
            修改结论
          </Button>
        </Tooltip>
      )}

      <Modal title="结论" open={showModal} onOk={handleOk} onCancel={handleCancel}>
        <TextArea value={coText} onChange={(e) => setCoText(e.target.value)} rows={6} />
      </Modal>
    </div>
  );
}
