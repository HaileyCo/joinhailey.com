import * as React from "react";

import * as Color from './color';

export const Text = ({href, children}) => (
  <a
    href={href}
    style={{
      cursor: "pointer",
      color: Color.toCSS(Color.Green),
    }}>
    {children}
  </a>
);
