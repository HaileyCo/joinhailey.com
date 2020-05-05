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

export const Row = ({children}) => {
  return <div className="flex flex-row">
    {children}
  </div>
}

export const Column = ({children, noWrap}) => {
  return <div className={`flex flex-column ${ noWrap ? "" : "flex-wrap" }`}>
    {children}
  </div>
}
