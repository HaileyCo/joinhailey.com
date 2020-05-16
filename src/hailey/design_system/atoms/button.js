import * as React from "react";

import * as Color from "./color";
import * as Spacer from "./spacer";

export const Primary = ({children}) => (
  <div
    style={{
      cursor: "pointer",
      color: Color.toCSS(Color.White),
      backgroundColor: Color.toCSS(Color.Green),
      borderRadius: "100px",
      fontVariant: "all-small-caps",
      fontWeight: 600
    }}>
    <Spacer.Vertical.Large />
    <div class="inline-block">
      {children}
    </div>
    <Spacer.Vertical.Large />
  </div>
);
