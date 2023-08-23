import fetcher from './fetcher';
import { PathMap } from './path-map';

export default async function dataProcessPoster(step: number | string, data?: any) {
  const res = fetcher(PathMap.lessonArimaPreprocessing + '/' + step + '/', {
    method: 'POST',
    body: JSON.stringify(data || {}),
  });

  return res;
}
