import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageBox from "./components/ImageBox";

function App() {
  const RefFileInput = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className="img-wrapper">
        <p className="text-center">
          이미지가 없습니다. <br /> 이미지를 추가해주세요.
        </p>
        <input type="file" ref={RefFileInput} className="input-file-box" />
        <div className="image-wrap">
          <button type="button" className="plus-box" onClick={() => RefFileInput.current?.click()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
