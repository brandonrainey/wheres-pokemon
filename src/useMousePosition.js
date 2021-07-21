import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = ev => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mouseup", updateMousePosition);

    return () => window.removeEventListener("mouseup", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;