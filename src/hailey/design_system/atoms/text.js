import * as React from "react";

export const H1 = ({children}) => {
  return <h1 className="" style={{ fontSize: "100px", fontWeight: 700 }}> {children} </h1>;
}

export const H2 = ({children}) => {
  return <h2 className=""> {children} </h2>;
}

export const Paragraph = ({children}) => <p className=""> {children} </p>;

export const Span = ({children}) => <span className=""> {children} </span>;
