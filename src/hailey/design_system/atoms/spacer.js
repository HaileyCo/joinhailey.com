import * as React from "react";

const spacer = s => () => <div className="block" style={{ height: `${s}px`, width: "100%", flexShrink: 0, flexGrow: 1 }} />;

export const ExtraSmall = spacer(5);
export const Small = spacer(10);
export const Medium = spacer(30);
export const Large = spacer(60);
export const ExtraLarge = spacer(100);

const vert_spacer = s => () => <div className="inline-block" style={{ width: `${s}px`, height: "100%", flexShrink: 0, flexGrow: 1 }} />;

export const Vertical = {
  ExtraSmall: vert_spacer(5),
  Small: vert_spacer(10),
  Medium: vert_spacer(30),
  Large: vert_spacer(60),
  ExtraLarge: vert_spacer(100),
};
