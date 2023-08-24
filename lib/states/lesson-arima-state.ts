import { atom } from 'jotai';

export const originDataAtom = atom<Array<any>>([]);
export const originColOptionsAtom = atom<Array<any>>((get) => {
  const originData = get(originDataAtom);
  return originData.length ? Object.keys(originData[0]).map((key) => ({ label: key, value: key })) : [];
});

interface IFile {
  name: string;
  link: string;
  type: 'file' | 'image';
}

export const filesAtom = atom<Array<IFile>>([
  {
    name: '格力电器营业收入.xlsx',
    link: '/file/格力电器营业收入.xlsx',
    type: 'file',
  },
]);
