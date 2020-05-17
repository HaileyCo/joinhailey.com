import * as React from "react";

export const H1 = ({children, center}) => {
  return <h1 className={`
  ${center ? "text-center" : ""}
    `} style={{ lineHeight: 1, fontSize: "4.5rem", fontWeight: 900 }}> {children} </h1>;
}

export const H1Small = ({children, center}) => {
  return <h1 className={`
  ${center ? "text-center" : ""}
    `} style={{ lineHeight: 1, fontSize: "2.7rem", fontWeight: 900 }}> {children} </h1>;
}

export const H2 = ({children, center}) => {
  return <h2 className={`
  ${center ? "text-center" : ""}
    `} style={{ lineHeight: 1.3, fontSize: "2.5rem", fontWeight: 900 }}> {children} </h2>;
}

export const H2Small = ({children, center}) => {
  return <h2 className={`
  ${center ? "text-center" : ""}
    `} style={{ lineHeight: 1.3, fontSize: "2rem", fontWeight: 900 }}> {children} </h2>;
}

export const H4 = ({children, center}) => {
  return <h4 className={`
      ${center ? "text-center" : ""}
    `} style={{ fontSize: "1.1rem", fontWeight: 600 }}> {children} </h4>;
}


export const H5 = ({children, center}) => {
  return <h5 className={`
      ${center ? "text-center" : ""}
    `} style={{ fontSize: "1rem", fontWeight: 300 }}> {children} </h5>;
}

export const Paragraph = ({children, opacity, center, auto, italic}) =>
  <p style={{
    width: auto ? "" : "100%",
    fontSize: "1rem",
    fontStyle: italic ? "italic" : "",
    textAlign: center ? "center" : "left",
    fontWeight: 100,
    opacity: opacity ? opacity : 1,
  }}>
  {children}
  </p>;

export const Span = ({children}) => <span> {children.trim()} </span>;

