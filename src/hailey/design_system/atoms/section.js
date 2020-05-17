import * as React from "react";

import * as Color from './color';
import * as Layout from "./layout";
import * as Spacer from "./spacer";

export const HeroMobile = ({children}) => (
  <header
    className="flex"
    style={{
      color: Color.toCSS(Color.White),
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, 0.95)),
      width: "100%"
    }}>
  <div
    style={{
      display: "flex",
      margin: "auto",
      width: "100%",
      maxWidth: "900px",
      minHeight: "95vh",
      padding: "0 40px",
    }}
  >
      {children}
    </div>
  </header>
);

export const Hero = ({children}) => (
  <header
    className="flex"
    style={{
      color: Color.toCSS(Color.White),
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, 0.95)),
      width: "100%"
    }}>
  <div
    style={{
      display: "flex",
      margin: "auto",
      width: "100%",
      maxWidth: "900px",
      minHeight: "90vh",
      padding: "0 40px",
    }}
  >
      {children}
    </div>
  </header>
);

export const MediumMobile = ({children, backgroundOpacity}) => (
  <section
    className="flex w-full min-h-0"
    style={{
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, backgroundOpacity ? backgroundOpacity : 1.0)),
      color: Color.toCSS(Color.White),
      width: "100%",
    }}>
  <div
    className="flex content-center m-auto"
    style={{
      display: "flex",
      width: "100%",
      maxWidth: "900px",
      padding: "0 40px",
    }}
    >
      <Layout.Column>
        <Spacer.Large />
      {children}
        <Spacer.ExtraLarge />
      </Layout.Column>
    </div>
  </section>
);

export const Medium = ({children, backgroundOpacity}) => (
  <section
    className="flex w-full min-h-0"
    style={{
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, backgroundOpacity ? backgroundOpacity : 1.0)),
      color: Color.toCSS(Color.White),
      width: "100%",
    }}>
  <div
    className="flex content-center m-auto"
    style={{
      display: "flex",
      width: "100%",
      maxWidth: "900px",
      padding: "0 20px",
    }}
    >
      <Layout.Column>
        <Spacer.ExtraLarge />
        <Spacer.Medium />
      {children}
        <Spacer.ExtraLarge />
        <Spacer.Medium />
        <Spacer.Medium />
      </Layout.Column>
    </div>
  </section>
);

export const Footer = ({children, backgroundOpacity}) => (
  <section
    className="flex w-full min-h-0"
    style={{
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, backgroundOpacity ? backgroundOpacity : 1.0)),
      color: Color.toCSS(Color.White),
      width: "100%",
    }}>
  <div
    className="flex content-center m-auto"
    style={{
      display: "flex",
      width: "100%",
      maxWidth: "900px",
      padding: "0 20px",
    }}
    >
      <Layout.Column>
        <Spacer.Large />
        {children}
        <Spacer.Medium />
      </Layout.Column>
    </div>
  </section>
);

export const FooterMobile = ({children, backgroundOpacity}) => (
  <section
    className="flex w-full min-h-0"
    style={{
      backgroundColor: Color.toCSS(Color.alpha(Color.Black, backgroundOpacity ? backgroundOpacity : 1.0)),
      color: Color.toCSS(Color.White),
      width: "100%",
    }}>
  <div
    className="flex content-center m-auto"
    style={{
      display: "flex",
      width: "100%",
      maxWidth: "900px",
      padding: "0 20px",
    }}
    >
      <Layout.Column>
        <Spacer.Medium />
        {children}
        <Spacer.Medium />
      </Layout.Column>
    </div>
  </section>
);
