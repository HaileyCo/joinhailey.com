import * as React from "react";

import * as Color from "./color";

const spacer = s => ({shrink, grow}) =>
  <div style={{
    display: "block",
    height: `${s}px`,
    width: "100%",
    flexShrink: shrink ? 1 : 0 ,
    flexGrow: grow ? 1 : 0
  }} />;

export const ExtraSmall = spacer(5);
export const Small = spacer(10);
export const Medium = spacer(30);
export const Large = spacer(60);
export const ExtraLarge = spacer(100);

const vert_spacer = s => () => <div className="inline-block" style={{ width: `${s}px`, height: "1px", flexShrink: 9999, flexGrow: 0 }} />;

export const Vertical = {
  ExtraSmall: vert_spacer(5),
  Small: vert_spacer(10),
  Medium: vert_spacer(30),
  Large: vert_spacer(60),
  ExtraLarge: vert_spacer(100),
};

export const HorizontalDivider = () => (
  <>
    <ExtraLarge />
    <hr style={{
      borderColor: Color.toCSS(Color.alpha(Color.Green, 0.3)),
      borderSize: "1px",
    }}/>
    <Large />
  </>
);
