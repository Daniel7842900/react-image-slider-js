import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { TbLoaderQuarter } from "react-icons/tb";
import "./App.css";

function App() {
  const IMAGECOUNT = 5;
  const [data, setData] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(Math.floor(IMAGECOUNT / 2));

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const newData = [];
    for (let index = 0; index < IMAGECOUNT; index++) {
      const randomNumber = Math.floor(Math.random() * 20) * index;
      const imageEndPoint = `https://picsum.photos/id/${randomNumber}/350/250`;
      const response = await axios.get(imageEndPoint);
      const responseURL = response.request.responseURL;
      const image = { id: index, url: responseURL };
      newData.push(image);
    }

    setData(newData);
  };

  const handlePreviousOnClick = () => {
    setCurrentIdx((index) => {
      if (index > 0) {
        return index - 1;
      } else {
        return index;
      }
    });
  };

  const handleNextOnClick = () => {
    setCurrentIdx((index) => {
      if (index < IMAGECOUNT - 1) {
        return index + 1;
      } else {
        return index;
      }
    });
  };

  return (
    <>
      <div className="greetings-container">
        <h1>Welcome to Image Slider</h1>
      </div>
      <div className="main-container">
        <div className="previous-btn-container">
          <AiOutlineLeftCircle
            className="navigation-btn"
            onClick={handlePreviousOnClick}
          />
        </div>
        <div className="main-image-container">
          {data.length > 0 ? (
            <img src={data[currentIdx].url} alt="Image" />
          ) : (
            <div className="loading-container">
              <TbLoaderQuarter className="loading-icon" />
              <span>Loading Image...</span>
            </div>
          )}
        </div>
        <div className="next-btn-container">
          <AiOutlineRightCircle
            className="navigation-btn"
            onClick={handleNextOnClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;
