import { atom } from 'jotai';

export const originDataAtom = atom<Array<any>>([]);

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
