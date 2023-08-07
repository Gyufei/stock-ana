const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default fetcher;
