import * as React from "react";

import * as Color from './color';

export const Text = ({href, children}) => (
  <a
    href={href}
    className=""
    style={{
      curosr: "pointer",
      color: Color.toCSS(Color.Green),
      // borderBottom: `1px dotted ${Color.toCSS(Color.Green)}`
    }}>
    {children}
  </a>
);
