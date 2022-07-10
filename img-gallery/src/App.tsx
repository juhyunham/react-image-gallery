import React, { useRef, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";
import ImageBox from "./components/ImageBox";

function App() {
  const RefFileInput = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);

    // onChange={(event) => {
    if (acceptedFiles.length) {
      for (const file of acceptedFiles) {
        //File API사용
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onloadend = (event) => {
          console.log(event.target);
          setImageList((prev) => [...prev, event.target?.result as string]);
        };
      }
    }
    // }}
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div className="img-wrapper">
        {imageList.length === 0 && (
          <p className="text-center">
            이미지가 없습니다. <br /> 이미지를 추가해주세요.
          </p>
        )}

        <div className="image-wrapper">
          <button type="button" className="plus-box" onClick={() => RefFileInput.current?.click()} {...getRootProps()}>
            +
          </button>
          <div className="image-wrap">
            {imageList.map((image, index) => {
              return <ImageBox key={image + index} src={image} />;
            })}
            <input type="file" {...getInputProps()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
