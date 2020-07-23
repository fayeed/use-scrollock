import { useEffect, useRef, useState, useCallback } from "react";
import { UseScrollockProps, UseScrollockReturntype } from "./types";

export const useScrollock = (
  options?: UseScrollockProps
): UseScrollockReturntype => {
  const {
    ref,
    disableHorizontalScroll = true,
    disableVerticalScroll = true,
    padScrollbarSpace = false,
  } = options || {};
  const [scrollock, setScrollock] = useState(false);

  let innerRef = useRef<HTMLElement>();

  const toggleScrollock = useCallback(
    (value?: boolean) => setScrollock(value ? value : !scrollock),
    []
  );

  // checks if the ref was provided or not & set it or just assign body.
  useEffect(() => {
    innerRef.current = ref?.current
      ? ref?.current
      : document.getElementsByTagName("body")![0];
  }, [ref]);

  const disableScroll = useCallback((e: Event) => {
    e.preventDefault();
    return false;
  }, []);

  const disableTouch = useCallback((e: TouchEvent) => {
    // checks if the user is using 2 or more fingers, ex. to perform pintch to zoom.
    if (e.touches.length) return true;

    e.preventDefault();
    return false;
  }, []);

  useEffect(() => {
    let body = innerRef.current!;
    body.style.paddingRight = !padScrollbarSpace
      ? "0px"
      : `${!scrollock ? 0 : window.innerWidth - body.offsetWidth}px`;

    body.style.overflowY =
      scrollock && disableVerticalScroll ? "hidden" : "auto";
    body.style.overflowX =
      scrollock && disableHorizontalScroll ? "hidden" : "auto";

    if (scrollock) {
      body.addEventListener("touchmove", disableTouch, { passive: false });
      body.addEventListener("scroll", disableScroll, { passive: false });
    } else {
      body.removeEventListener("touchmove", disableTouch);
      body.removeEventListener("scroll", disableScroll);
    }

    return () => {
      body.style.paddingRight = "0px";
      body.style.overflowY = "auto";
      body.style.overflowX = "auto";

      body.removeEventListener("touchmove", disableTouch);
      body.removeEventListener("scroll", disableScroll);
    };
  }, [scrollock]);

  return { scrollock, toggleScrollock };
};

export default useScrollock;
