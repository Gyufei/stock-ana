import { useAtom } from 'jotai';
import { commentsAtom } from '../states/lesson-arima-state';
import { useLessonPoster } from '../http/lesson-poster';
import { PathMap } from '../http/path-map';

export function useComments() {
  const [comments, setComments] = useAtom(commentsAtom);
  const { poster } = useLessonPoster();

  const handleSetComments = async (cos: Record<string, any>) => {
    setComments(cos);

    await poster(`${PathMap.sharePath}/field/`, {
      value: cos,
    });
  };

  return {
    comments,
    handleSetComments,
  };
}
