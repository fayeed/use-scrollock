import { useEffect, useRef, useState, MutableRefObject } from "react";

interface UseScrollockProps {
  disableHorizontalScroll?: boolean;
  disableVerticalScroll?: boolean;
  padScrollbarSpace?: boolean;
  ref?: MutableRefObject<any>;
}

interface UseScrollockReturntype {
  scrollock: boolean;
  toggleScrollock: (value?: boolean) => void;
}

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

  const toggleScrollock = (value?: boolean) =>
    setScrollock(value ? value : !scrollock);

  useEffect(() => {
    innerRef.current = ref?.current
      ? ref?.current
      : document.getElementsByTagName("body")![0];
  }, [ref]);

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
  }, [scrollock]);

  return { scrollock, toggleScrollock };
};

const disableScroll = (e: Event) => {
  e.preventDefault();
  return false;
};

const disableTouch = (e: TouchEvent) => {
  if (e.touches.length) return true;
  e.preventDefault();
  return false;
};
