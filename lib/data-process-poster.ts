import fetcher from './fetcher';
import { PathMap } from './path-map';

export default async function dataProcessPoster(step: number, data?: any) {
  const res = fetcher(PathMap.lessonIndex + step + '/', {
    method: 'POST',
    body: JSON.stringify(data || {}),
  });

  return res;
}
