import React from 'react';

import * as Components from "./components";

import Mobile from "./mobile"
import Desktop from "./desktop"

const Hailey = () => {
  const screen = Components.useWindowDimensions();
  const { height, width } = screen;

  if (width < 1024) return <Mobile screen={screen} />;
  return <Desktop screen={screen} />;
}

export default Hailey;
