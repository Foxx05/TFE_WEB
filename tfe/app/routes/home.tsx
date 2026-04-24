import { Link } from "react-router";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <h1>Berrycam</h1>
    </main>
  );
}