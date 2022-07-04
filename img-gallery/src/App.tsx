import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageBox from "./components/ImageBox";

function App() {
  return (
    <div>
      <div className="img-wrapper">
        <p className="text-center">
          이미지가 없습니다. <br /> 이미지를 추가해주세요.
        </p>
        <div className="image-wrap">
          <button type="button" className="plus-box">
            +
          </button>
          <ImageBox src="" />
          <ImageBox src="" />
          <ImageBox src="" />
        </div>
      </div>
    </div>
  );
}

export default App;
