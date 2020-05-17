import * as React from "react";

import * as Color from "./color";
import * as Spacer from "./spacer";

export const Primary = ({children}) => (
  <div
    style={{
      display: "flex",
      cursor: "pointer",
      color: Color.toCSS(Color.White),
      backgroundColor: Color.toCSS(Color.Green),
      borderRadius: "100px",
      textTransform: "uppercase",
      height: "50px",
      fontWeight: 600,
      fontSize: "12px",
      letterSpacing: 0.5,
      alignItems: "center",
    }}>
    <Spacer.Vertical.Large />
    <div class="inline-block">
      {children}
    </div>
    <Spacer.Vertical.Large />
  </div>
);
