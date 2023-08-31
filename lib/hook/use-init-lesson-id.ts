import { useSetAtom } from 'jotai';
import { lessonUserIdAtom, lessonCourseIdAtom, lessonExpIdAtom } from '../states/lesson-arima-state';

export function useInitLessonId(course: number, exp: number) {
  const setLessonUserIdAtom = useSetAtom(lessonUserIdAtom);
  const setLessonCourseIdAtom = useSetAtom(lessonCourseIdAtom);
  const setLessonExpIdAtom = useSetAtom(lessonExpIdAtom);

  const userId = 1;

  setLessonUserIdAtom(userId);
  setLessonCourseIdAtom(course);
  setLessonExpIdAtom(exp);
}
