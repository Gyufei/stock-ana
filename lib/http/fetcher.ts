/* eslint-disable no-undef */

export default async function fetcher(input: URL | RequestInfo, init?: RequestInit | undefined) {
  const newInit = {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  };

  const res = await fetch(input, newInit);

  if (!res || !res.ok) {
    const error = new Error('An error occurred while fetching the data.') as any;

    const resBody = await res.text();
    const errorTip = resBody.length > 100 ? `Failed: An error occurred ${resBody.substring(1, 40)}...` : resBody;
    error.info = errorTip;
    error.status = res.status;

    throw error;
  }

  const json = await res.json();
  return json;
}
