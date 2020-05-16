import * as React from "react";

export const H1 = ({children, center}) => {
  return <h1 className={`
  ${center ? "text-center" : ""}
    `} style={{ lineHeight: 1, fontSize: "5rem", fontWeight: 900 }}> {children} </h1>;
}

export const H2 = ({children, center}) => {
  return <h2 className={`
  ${center ? "text-center" : ""}
    `} style={{ lineHeight: 1, fontSize: "50px", fontWeight: 900 }}> {children} </h2>;
}

export const H4 = ({children, center}) => {
  return <h4 className={`
      ${center ? "text-center" : ""}
    `} style={{ fontSize: "18px", fontWeight: 600 }}> {children} </h4>;
}


export const H5 = ({children, center}) => {
  return <h5 className={`
      ${center ? "text-center" : ""}
    `} style={{ fontSize: "13px", fontWeight: 300 }}> {children} </h5>;
}

export const Paragraph = ({children, center, auto}) =>
  <p className="" style={{ width: auto ? "" : "100%", fontSize: "18px", textAlign: center ? "center" : "left" }}> {children} </p>;

export const Span = ({children}) => <span className=""> {children} </span>;
