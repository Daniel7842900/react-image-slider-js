import "./App.css";
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="greetings-container">
        <h1>Welcome to Image Slider</h1>
      </div>
      <div className="main-container">
        <div className="previous-btn-container">
          <AiOutlineLeftCircle className="navigation-btn" />
        </div>
        <div className="main-image-container"></div>
        <div className="next-btn-container">
          <AiOutlineRightCircle className="navigation-btn" />
        </div>
      </div>
    </>
  );
}

export default App;
