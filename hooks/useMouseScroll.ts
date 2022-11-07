import { useEffect } from "react";

// ref === scroll container
export default function useMouseScroll(ref: React.RefObject<HTMLDivElement>, dir: "y" | "x") {
  useEffect(() => {
    if (!ref.current) return;
    let mouseDown = false;
    let start = 0;
    let scrollAmount = 0;
    ref.current.addEventListener("mousedown", (e) => {
      const slider = ref.current;
      if (!slider) return;
      e.preventDefault(); // prevent ghost image
      mouseDown = true;
      if (dir === "y") {
        start = e.pageY - slider.offsetTop;
        scrollAmount = slider.scrollTop;
      } else {
        start = e.pageX - slider.offsetLeft;
        scrollAmount = slider.scrollLeft;
      }
    });
    ref.current.addEventListener("mouseup", () => (mouseDown = false));
    ref.current.addEventListener("mouseleave", () => (mouseDown = false));
    ref.current.addEventListener("mousemove", (e) => {
      const slider = ref.current;
      if (!mouseDown || !slider) return;
      if (dir === "y") {
        const y = e.pageY - slider.offsetTop;
        const walk = y - start;

        slider.scrollTop = scrollAmount - walk;
      } else {
        const x = e.pageX - slider.offsetLeft;
        const walk = x - start;
        slider.scrollLeft = scrollAmount - walk;
      }
    });
  }, [ref, dir]);
}
