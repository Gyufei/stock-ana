export function WithHost(path: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export function WithAiHost(path: string) {
  return `${process.env.NEXT_PUBLIC_AI_API_URL}${path}`;
}

export const PathMap = {
  // 保存数据集
  saveDataSet: WithHost('/saveDataSet'),
  saveStocks: WithHost('/saveStocks'),
  pickStock: WithHost('/selectUtils/getStockByPEG'),

  // algo
  algoIndex: WithAiHost('/index'),
};
