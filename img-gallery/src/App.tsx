import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageBox from "./components/ImageBox";

function App() {
  const RefFileInput = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]);

  return (
    <div>
      <div className="img-wrapper">
        {imageList.length === 0 && (
          <p className="text-center">
            이미지가 없습니다. <br /> 이미지를 추가해주세요.
          </p>
        )}
        <input
          type="file"
          ref={RefFileInput}
          className="input-file-box"
          onChange={(event) => {
            if (event.currentTarget.files?.[0]) {
              const file = event.currentTarget.files[0];

              //File API사용
              const reader = new FileReader();

              reader.readAsDataURL(file);
              reader.onloadend = (event) => {
                console.log(event.target);
                setImageList((prev) => [...prev, event.target?.result as string]);
              };
            }
          }}
        />
        <div className="image-wrap">
          <button type="button" className="plus-box" onClick={() => RefFileInput.current?.click()}>
            +
          </button>
          {imageList.map((image, index) => {
            return <ImageBox key={image + index} src={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
