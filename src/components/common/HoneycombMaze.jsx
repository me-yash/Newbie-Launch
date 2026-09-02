import { useEffect, useRef } from "react";
import "./HoneycombMaze.css";

const bees = [
  "bee bee-1",
  "bee bee-2",
  "bee bee-3",
  "bee bee-4",
  "bee bee-5",
];

function drawHoneycomb(svgEl) {
  if (!svgEl) return;

  const width =
    svgEl.clientWidth ||
    svgEl.getBoundingClientRect().width ||
    window.innerWidth;

  const height =
    svgEl.clientHeight ||
    svgEl.getBoundingClientRect().height ||
    window.innerHeight;

  while (svgEl.firstChild) {
    svgEl.removeChild(svgEl.firstChild);
  }

  const size = 38;
  const stroke = "#2A2440";
  const strokeWidth = 1.8;
  const opacity = 0.13;

  const columnWidth = size * Math.sqrt(3);
  const rowHeight = size * 1.5;

  const columns =
    Math.ceil(width / columnWidth) + 2;

  const rows =
    Math.ceil(height / rowHeight) + 2;

  const namespace =
    "http://www.w3.org/2000/svg";

  for (let row = -1; row < rows; row++) {
    for (let col = -1; col < columns; col++) {
      const centerX =
        col * columnWidth +
        (row % 2 !== 0 ? columnWidth / 2 : 0);

      const centerY =
        row * rowHeight;

      const points = [];

      for (let k = 0; k < 6; k++) {
        const angle =
          (Math.PI / 180) *
          (60 * k - 30);

        const x =
          centerX +
          size * Math.cos(angle);

        const y =
          centerY +
          size * Math.sin(angle);

        points.push(
          `${x.toFixed(2)},${y.toFixed(2)}`
        );
      }

      const polygon =
        document.createElementNS(
          namespace,
          "polygon"
        );

      polygon.setAttribute(
        "points",
        points.join(" ")
      );

      polygon.setAttribute(
        "fill",
        "none"
      );

      polygon.setAttribute(
        "stroke",
        stroke
      );

      polygon.setAttribute(
        "stroke-width",
        strokeWidth
      );

      polygon.setAttribute(
        "opacity",
        opacity
      );

      svgEl.appendChild(polygon);
    }
  }
}

export default function HoneycombMaze() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;

    const draw = () => {
      drawHoneycomb(svg);
    };

    draw();

    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        draw();
      }, 200);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="honeycomb-maze">
      <svg
        ref={svgRef}
        className="honeycomb-canvas"
        aria-hidden="true"
      />

      {bees.map((className, index) => (
        <div
          key={index}
          className={className}
          aria-hidden="true"
        >
          🐝
        </div>
      ))}
    </div>
  );
}