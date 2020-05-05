import * as React from "react";

import * as Color from './color';

export const Hero = ({children}) => {
  return (
    <header className="flex w-full min-h-screen lg:min-h-0" style={{ maxHeight: "700px", backgroundColor: Color.Black, color: Color.White }}>
      <div className="flex content-center min-h-screen lg:min-h-0 max-w-screen-lg m-auto">
        {children}
      </div>
    </header>
  );
}

export const Medium = ({children}) => {
  return (
    <section className="flex h-auto">
      {children}
    </section>
  );
}
