import { useState, useEffect } from "react";
// import Lottie from "react-lottie";
// import animationData1 from "./lottie1.json";
// import animationData2 from "./lottie2.json";
// import animationData3 from "./lottie3.json";
import "./Path.css"; // Import CSS file

const Path = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev < 3 ? prev + 1 : prev));
    }, 1300); // Change tab every 1.3s

    return () => clearInterval(interval);
  }, [activeTab]);

//   const lottieOptions = (animationData: any) => ({
//     loop: false,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   });

  return (
    <div className="container">
      {/* Numbered line with animation */}
      <div className="progress-bar">
        <span className="number">1</span>
        <div className={`progress-line ${activeTab >= 1 ? "animate" : ""}`}></div>
        <span className="number">2</span>
        <div className={`progress-line ${activeTab >= 2 ? "animate" : ""}`}></div>
        <span className="number">3</span>
      </div>

      {/* Tabs with Lottie Animations */}
      <div className="tabs-container">
        {/* Tab 1 */}
        <div className={`tab ${activeTab >= 1 ? "visible" : ""}`}>
          {activeTab >= 1}
        </div>

        {/* Tab 2 */}
        <div className={`tab ${activeTab >= 2 ? "visible" : ""}`}>
          {activeTab >= 2 }
        </div>

        {/* Tab 3 */}
        <div className={`tab ${activeTab >= 3 ? "visible" : ""}`}>
          {activeTab >= 3}
        </div>
      </div>
    </div>
  );
};

export default Path;