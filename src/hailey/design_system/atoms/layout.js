import * as React from "react";

import * as Color from "./color";

export const Body = ({backgroundImage, children}) =>  {
  return <section style={{
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    backgroundColor: Color.toCSS(Color.Blackest),
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "-800px",
    backgroundPositionY: "100px",
    color: Color.toCSS(Color.White),
  }}>
    {children}
  </section>
}

export const Container = ({children}) =>  (
  <section className="flex">
    {children}
  </section>
)

export const Row = ({children, noWrap, width, justifyCenter, justifySpaceEvenly, justifySpaceBetween}) => (
<div className={`
    flex
    flex-row
    ${ noWrap ? "" : "flex-wrap" }
    ${ justifyCenter ? "justify-center" : "" }
    ${ justifySpaceEvenly ? "justify-evenly" : "" }
    ${ justifySpaceBetween ? "justify-between" : "" }
  `}
    style={{
      width: width ? width : "100%"
    }}>
    {children}
  </div>
);

export const Column = ({children, noWrap, width, maxHeight, justifyCenter, alignCenter, alignTop}) => {
  return <div className={`
    flex
    flex-col
    ${ noWrap ? "" : "flex-wrap" }
    ${ justifyCenter ? "justify-center" : "" }
    ${ alignCenter ? "items-center" : "" }
    ${ alignTop ? "items-top" : "" }
  `}
    style={{
      width: width ? width : "100%",
      maxHeight: maxHeight ? maxHeight : ""
    }}
  >
    {children}
  </div>
}

export const Relative = ({top, left, bottom, right,  children}) => (
  <div style={{ position: "relative", top, left, bottom, right  }}>
    {children}
  </div>
)

export const Crop = ({maxWidth, maxHeight, children}) => (
  <div style={{ maxWidth, maxHeight, overflow: "hidden" }}>
    {children}
  </div>
)
