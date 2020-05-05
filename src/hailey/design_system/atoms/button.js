import * as React from "react";

import * as Color from "./color";
import * as Spacer from "./spacer";

export const Primary = ({children, href, target="_blank"}) => {
  return <div className="text-center" style={{ cursor: "pointer", color: Color.White, backgroundColor: Color.Green, borderRadius: "100px", fontVariant: "all-small-caps", fontWeight: 600}}>
    <Spacer.Vertical.Large />
    <a className="inline-block" href={href} target={target}> {children} </a>
    <Spacer.Vertical.Large />
  </div>
};
