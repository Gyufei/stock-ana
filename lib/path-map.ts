function WithHost(path: string) {
  return `${process.env.NEXT_PUBLIC_API_URL}${path}`;
}

export const PathMap = {
  saveDataSet: WithHost('/saveDataSet'),
};
