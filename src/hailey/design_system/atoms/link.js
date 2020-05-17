import * as React from "react";

import * as Color from './color';

export const Text = ({href, target="_blank", children}) => (
  <a
    href={href}
    target={target}
    style={{
      cursor: "pointer",
      color: Color.toCSS(Color.White),
    }}>
    {children}
  </a>
);
