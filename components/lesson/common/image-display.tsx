import { Image, Tooltip } from 'antd';

export default function ImageDisplay({ images }: { images: Array<Record<string, any>> }) {
  const ImgItems = ({ img }: { img: Record<string, any> }) => {
    return (
      <div className="flex flex-col justify-center">
        {img.title ? (
          <div className="mb-2 text-center">
            {img.tip ? (
              <Tooltip title={img.tip}>
                {img.title}
                <i className="mx-1 fa-solid fa-circle-info"></i>
              </Tooltip>
            ) : (
              img.title
            )}
          </div>
        ) : null}
        <Image key="img.name" src={`/img/${img.name}.png`} width={500} height={200} alt={img.name} />
      </div>
    );
  };

  return (
    <div className="flex w-full overflow-x-auto gap-2">
      {images.map((img) => {
        return <ImgItems key={img.name} img={img} />;
      })}
    </div>
  );
}
