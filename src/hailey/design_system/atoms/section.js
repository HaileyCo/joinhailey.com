import * as React from "react";

import * as Color from './color';

export const Hero = ({children}) => (
  <header
    className="flex w-full min-h-screen"
    style={{
      color: Color.toCSS(Color.White),
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, 0.95)),
      width: "100%",
    }}>
  <div
    className="content-center m-auto"
    style={{
      display: "flex",
      width: "100%",
      maxWidth: "1024px",
      padding: "0 40px",
    }}
  >
      {children}
    </div>
  </header>
);

export const Medium = ({children, backgroundOpacity}) => (
  <section
    className="flex w-full min-h-screen lg:min-h-0"
    style={{
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, backgroundOpacity ? backgroundOpacity : 1.0)),
      color: Color.toCSS(Color.White),
      width: "100%",
    }}>
  <div
    className="flex content-center m-auto"
    style={{
      display: "flex",
      width: "100%",
      maxWidth: "1024px",
      padding: "0 20px",
    }}
    >
      {children}
    </div>
  </section>
);
