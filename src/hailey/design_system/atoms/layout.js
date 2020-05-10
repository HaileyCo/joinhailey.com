import * as React from "react";

import * as Color from "./color";

export const Body = ({children}) =>  {
  return <section style={{
    fontSize: "20px",
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300,
    backgroundColor: Color.White,
    color: Color.Black
  }}>
    {children}
  </section>
}

export const Container = ({children}) =>  {
  return <section className="flex">
    {children}
  </section>
}

export const Row = ({children, noWrap, justifyCenter, justifySpaceEvenly}) => {
  return <div className={`
    flex
    flex-row
    ${ noWrap ? "" : "flex-wrap" }
    ${ justifyCenter ? "justify-center" : "" }
    ${ justifySpaceEvenly ? "justify-evenly" : "" }
  `}>
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
