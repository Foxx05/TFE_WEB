import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="text--header">
        <h1>Berrycam</h1>
        <h2>The future of strawberry greenhouse culture</h2>
      </div>
    </main>
  );
}