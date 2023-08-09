export function WithHost(path: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export const PathMap = {
  // 保存数据集
  saveDataSet: WithHost('/saveDataSet'),
  pickStock: WithHost('/pickStock'),
};
