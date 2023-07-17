import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import "./App.css";

const imageEndPoint = "https://picsum.photos/350/250";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const response = await axios.get(imageEndPoint);
    const responseURL = response.request.responseURL;
    setData(responseURL);
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
          {data && <img src={data} alt="Image" />}
        </div>
        <div className="next-btn-container">
          <AiOutlineRightCircle className="navigation-btn" />
        </div>
      </div>
    </>
  );
}

export default App;
