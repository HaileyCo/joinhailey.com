import * as React from "react";

import * as Color from "./color";

export const Body = ({backgroundImage, children}) =>  {
  return <section style={{
    fontSize: "20px",
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    backgroundColor: Color.toCSS(Color.Blackest),
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "-800px",
    backgroundPositionY: "100px",
    color: Color.toCSS(Color.White),
    transition: "background 0.4s linear",
  }}>
    {children}
  </section>
}

export const Container = ({children}) =>  {
  return <section className="flex">
    {children}
  </section>
}

export const Row = ({children, noWrap, width, justifyCenter, justifySpaceEvenly}) => {
  return <div className={`
    flex
    flex-row
    ${ noWrap ? "" : "flex-wrap" }
    ${ justifyCenter ? "justify-center" : "" }
    ${ justifySpaceEvenly ? "justify-evenly" : "" }
  `}
    style={{
      width: width ? width : "100%"
    }}>
    {children}
  </div>
}

export const Column = ({children, noWrap, width, justifyCenter, alignCenter}) => {
  return <div className={`
    flex
    flex-col
    ${ noWrap ? "" : "flex-wrap" }
    ${ justifyCenter ? "justify-center" : "" }
    ${ alignCenter ? "items-center" : "" }
  `}
    style={{
      width: width ? width : "100%"
    }}
  >
    {children}
  </div>
}
