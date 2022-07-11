import BlindText from "./BlindTest";

function ImageBox(props: { src: string }) {
  return (
    <div className="image-box">
      <button type="button">
        <BlindText tag="span">닫기</BlindText>
      </button>
      <img src={props.src} alt="" />
    </div>
  );
}

export default ImageBox;
