import useBeforeRender from "@/app/CustomHooks/useBeforeRender";
import { useEffect, useState } from "react";

function useDimensions(length: number) {
  const [dimensions, setDimensions] = useState({
    card: "0",
    container: "0",
    items: 0,
  });

  function getWidth() {
    const { innerWidth } = window;
    let width: string | number = 0;
    let items: number;

    switch (true) {
      case innerWidth < 570:
        items = 1;
        width = innerWidth;
        break;
      case innerWidth >= 570 && innerWidth < 970:
        items = 2;
        width = innerWidth / items - 20;
        break;
      case innerWidth >= 970 && innerWidth <= 1200:
        items = 3;
        width = innerWidth / items - 16;
        break;
      default:
        items = 3;
        width = 1200 / items;
    }
    width = Math.floor(width as number).toFixed();

    setDimensions({
      card: width,
      container: (Number(width) * length).toString(),
      items,
    });
  }

  useBeforeRender(getWidth);

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  return dimensions;
}

export default useDimensions;
