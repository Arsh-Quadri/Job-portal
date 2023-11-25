import { useEffect, useState } from "react";

const MouseFollowerDot = () => {
  //   const [mouseX, setMouseX] = useState(0);
  //   const [mouseY, setMouseY] = useState(0);
  // const [dotSize, setDotSize] = useState(10);
  var dotSize = 15;
  const [dotStyle, setDotStyle] = useState({
    left: 0,
    top: 0,
    width: dotSize,
    height: dotSize,
  });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newMouseX = e.clientX;
      const newMouseY = e.clientY;

      // Calculate the new dot position with a slight delay
      setTimeout(() => {
        // setMouseX(newMouseX);
        // setMouseY(newMouseY);
        setDotStyle({
          left: newMouseX + dotSize,
          top: newMouseY - dotSize / 2,
          width: dotSize,
          height: dotSize,
          transition: "left 0.3s, top 0.3s",
        });
      }, 80); // Adjust the delay duration as needed
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dotSize]);

  return <div className="mouse-follower-dot" style={dotStyle}></div>;

  // Rest of the component code
};

export default MouseFollowerDot;
