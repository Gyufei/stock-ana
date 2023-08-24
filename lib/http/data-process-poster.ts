import fetcher from './fetcher';
import { PathMap } from './path-map';

export default async function dataPoster(path: string, data?: any) {
  const res = fetcher(PathMap.lessonArima + '/' + path + '/', {
    method: 'POST',
    body: JSON.stringify(data || {}),
  });

  return res;
}
