import { atom } from 'jotai';

// origin data
export const originDataAtom = atom<Array<any>>([]);
export const originColOptionsAtom = atom<Array<any>>((get) => {
  const originData = get(originDataAtom);
  return originData.length ? Object.keys(originData[0]).map((key) => ({ label: key, value: key })) : [];
});

// files
export interface IFile {
  name: string;
  link: string;
  type: 'file' | 'image';
}
export const filesAtom = atom<Array<IFile>>([]);

// ids
export const lessonUserIdAtom = atom<number>(1);
export const lessonCourseIdAtom = atom<number>(1);
export const lessonExpIdAtom = atom<number>(1);
export const lessonQueryAtom = atom((get) => ({
  user_id: get(lessonUserIdAtom),
  course_id: get(lessonCourseIdAtom),
  exp_id: get(lessonExpIdAtom),
}));

// comments
export const commentsAtom = atom<Record<string, string>>({});
