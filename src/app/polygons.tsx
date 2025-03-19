import React, { useEffect, useState } from "react";
import "./polygons.css";

const randomClipPath = () => {
  const sides = Math.floor(Math.random() * 5) + 3; // Between 3 and 8 sides
  const angleStep = (Math.PI * 2) / sides;
  let path = "";

  for (let i = 0; i < sides; i++) {
    const x = 50 + 50 * Math.cos(i * angleStep);
    const y = 50 + 50 * Math.sin(i * angleStep);
    path += `${x}% ${y}%, `;
  }

  return `polygon(${path.slice(0, -2)})`;
};

const randomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#5733FF", "#F5B041", "#33FFF2", "#FF33A1"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const PolygonAnimation: React.FC = () => {
  const [polygons, setPolygons] = useState(
    Array.from({ length: 10 }, () => ({
      size: Math.random() * 100 + 50, // Between 50px and 150px
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      clipPath: randomClipPath(),
      backgroundColor: randomColor(),
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPolygons((prevPolygons) =>
        prevPolygons.map(() => ({
          size: Math.random() * 100 + 50,
          top: Math.random() * 100 + "%",
          left: Math.random() * 100 + "%",
          clipPath: randomClipPath(),
          backgroundColor: randomColor(),
        }))
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="polygons">
      {polygons.map((polygon, index) => (
        <div
          key={index}
          className="polygon"
          style={{
            width: polygon.size,
            height: polygon.size,
            top: polygon.top,
            left: polygon.left,
            clipPath: polygon.clipPath,
            backgroundColor: polygon.backgroundColor,
            position: "absolute",
          }}
        />
      ))}
    </div>
  );
};

export default PolygonAnimation;
