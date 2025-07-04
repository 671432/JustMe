import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../styles/Layout.css";

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

export function Layout({ children, pageTitle }: LayoutProps) {
  const location = useLocation();
  const isHome = location.pathname.replace("/JustMe", "") === "/";

  return (
    <>
      <Navbar />
      <div className="hero">
        {isHome ? (
          <div className="hero-content">
            <h1>Hei, I'm Justin</h1>
            <p>
              Tech enthusiast who likes dabbling and deep diving in many things.
            </p>
          </div>
        ) : pageTitle ? (
          <div className="hero-content">
            <h1>{pageTitle}</h1>
          </div>
        ) : null}
      </div>
      <main className="page-content">{children}</main>
    </>
  );
}
