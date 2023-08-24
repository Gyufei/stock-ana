export function toBase64(str: string) {
  return `data:image/png;base64,${str}`;
}

export const likeArrayObjToArray = (data: Record<string, any>) => {
  if (!data) return [];

  const length = Object.keys(data).length;
  const arr = Array.from({
    ...{
      '0': data[0] || null,
      ...data,
    },
    length: data[0] ? length : length + 1,
  });
  return arr;
};

export function coverBase64ToFileBlob(base64String: string) {
  // 将base64字符串转换为字节数组
  console.log(base64String);
  const byteCharacters = atob(base64String);

  // 创建一个Uint8Array来存储字节数组
  const byteArrays = new Uint8Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteArrays[i] = byteCharacters.charCodeAt(i);
  }

  // 创建Blob对象
  const blob = new Blob([byteArrays], { type: 'image/png' }); // 根据实际图片类型设置MIME类型

  return blob;
}
