export default function ErrorCon({ errorStr }: { errorStr: string }) {
  return (
    <>
      <div className="text-lg">发生错误!</div>
      <div className="text-red-600">{errorStr}</div>
    </>
  );
}
