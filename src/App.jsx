import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const newData = [];
    for (let index = 0; index < 5; index++) {
      const randomNumber = Math.floor(Math.random() * 20) * index;
      const imageEndPoint = `https://picsum.photos/id/${randomNumber}/350/250`;
      const response = await axios.get(imageEndPoint);
      const responseURL = response.request.responseURL;
      const image = { id: index, url: responseURL };
      newData.push(image);
    }

    setData(newData);
  };

  return (
    <>
      <div className="greetings-container">
        <h1>Welcome to Image Slider</h1>
      </div>
      <div className="main-container">
        <div className="previous-btn-container">
          <AiOutlineLeftCircle className="navigation-btn" />
        </div>
        <div className="main-image-container">
          {data.length > 0 ? (
            <img src={data[2].url} alt="Image" />
          ) : (
            <div>Loading Image...</div>
          )}
        </div>
        <div className="next-btn-container">
          <AiOutlineRightCircle className="navigation-btn" />
        </div>
      </div>
    </>
  );
}

export default App;
