import * as React from "react";

import * as Color from './color';

export const Hero = ({children}) => (
  <header
    className="flex w-full min-h-screen lg:min-h-0"
    style={{
      color: Color.toCSS(Color.White),
      maxHeight: "80vw",
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, 0.95)),
    }}>
    <div className="flex content-center max-w-screen-lg m-auto">
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
    }}>
    <div className="flex content-center max-w-screen-lg m-auto">
      {children}
    </div>
  </section>
);
