export function toBase64(str: string) {
  return `data:image/png;base64,${str}`;
}

export const likeArrayObjToArray = (data: Record<string, any>) => {
    if (!data) return [];

    const length = Object.keys(data).length;
    const arr = Array.from({ ...data, length });
    return arr;
  };

