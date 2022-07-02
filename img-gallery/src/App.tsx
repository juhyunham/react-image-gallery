import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="img-box-wrap">
        <p className="text-center">
          이미지가 없습니다. <br /> 이미지를 추가해주세요.
        </p>
        <div className="img-box">
          <button type="button" className="plus-box">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
