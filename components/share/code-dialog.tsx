import { Drawer } from 'antd';
import Highlight from 'react-highlight.js';
import '/style/monokai.min.css';

export default function CodeDialog({ open, setShow, code }: { code: string; open: boolean; setShow: (_s: boolean) => void }) {
  return (
    <Drawer title="代码" placement="right" onClose={(_e) => setShow(false)} open={open} width={800}>
      {Array.isArray(code) ? (
        code.map((c, i) => (
          <Highlight className="mt-4" key={i} language="python">
            {c}
          </Highlight>
        ))
      ) : (
        <Highlight language="python">{code}</Highlight>
      )}
    </Drawer>
  );
}