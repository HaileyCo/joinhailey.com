import * as React from "react";

import * as Color from "./color";

export const FloatingIsotype = () => {
  return <div className="" style={{ margin: "50px 0" }}>
    <h1 style={{
      position: "absolute",
      left: "50",
      top: "50",
      lineHeight: 1,
      fontSize: "50px",
      fontWeight: 900,
      color: Color.toCSS(Color.Green)
    }}> h. </h1>
  </div>
};

export const Isotype = () => {
  return <div>
    <h1 style={{
      lineHeight: 1,
      fontSize: "50px",
      fontWeight: 900,
      color: Color.toCSS(Color.Green)
    }}> h. </h1>
  </div>
};
