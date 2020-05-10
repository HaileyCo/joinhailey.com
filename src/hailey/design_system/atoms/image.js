import * as React from "react";

const image = s => ({src, rounded}) =>
  <img className={`
    ${ rounded ? "rounded-full" : "" }
  `}
  style={{ height: `${s}px`, width: `${s}px`, flexShrink: 0, flexGrow: 0 }}
  src={src}
/>;

export const ExtraSmall = image(5 * 10);
export const Small = image(5 * 20);
export const Medium = image(5 * 35);
export const Large = image(5 * 70);
export const ExtraLarge = image(5 * 100);

export const Full = ({src, rounded}) => (
  <img className={`
    ${ rounded ? "rounded-full" : "" }
  `}
  style={{
    maxWidth: "max-content",
    flexShrink: 0,
    flexGrow: 0
  }}
  src={src}
/>);
