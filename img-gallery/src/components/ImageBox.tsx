import BlindText from "./BlindTest";

interface ImageBoxProps {
  src: string;
  handleClick: (image: string) => void;
}

function ImageBox({ src, handleClick }: ImageBoxProps) {
  return (
    <div className="image-box">
      <button type="button" className="btn-close" onClick={() => handleClick(src)}>
        <BlindText tag="span">닫기</BlindText>
      </button>
      <img src={src} alt="" />
    </div>
  );
}

export default ImageBox;
