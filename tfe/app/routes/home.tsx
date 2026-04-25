import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <header className="head">
        <div className="head--img"></div>

        <div className="head--text">
          <h1>Berrycam</h1>
          <h2>The future of strawberry greenhouse culture</h2>
        </div>
      </header>
    </main>
  );
}