import { MutableRefObject } from "react";

export interface UseScrollockProps {
  /**
   * Disables horizontal scroll. Defaults to `true`.
   */
  disableHorizontalScroll?: boolean;

  /**
   * Disables vertical scroll. Defaults to `true`.
   */
  disableVerticalScroll?: boolean;

  /**
   * Should the scroll bar space be preserved. Defaults to `false`.
   */
  padScrollbarSpace?: boolean;

  /**
   * Provide reference to a component other than body.
   */
  ref?: MutableRefObject<any>;
}

export interface UseScrollockReturntype {
  /**
   * Incicates the current scrollock state.
   */
  scrollock: boolean;

  /**
   * toggles the scrollock state, you can manually set the value too.
   *
   * @param value: Overrides the toggle behaviour & allows to manullay set the value.
   */
  toggleScrollock: (value?: boolean) => void;
}
