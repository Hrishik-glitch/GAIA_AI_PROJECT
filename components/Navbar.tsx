"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const tab = (href: string, label: string) => (
    <Link
      href={href}
      className={`gaia-btn pill ${path === href ? "primary" : "ghost"}`}

    >
      {label}
    </Link>
  );

  return (
    <header className="header">
      <div className="brand">
        <div className="logo" />
        <div>
          <h1>GAIA Link — Demo</h1>
          <div className="muted">Simulation Hub · SymbioSphere · Nexus · Eco-Tracker</div>
        </div>
      </div>
      <nav>
        {tab("/", "Home")}
        {tab("/about", "About")}
        {tab("/gaia-link", "GAIA Link")}
        {tab("/symbiosphere", "SymbioSphere")}
        {tab("/nexus", "Nexus")}
        {tab("/eco-tracker", "Eco-Tracker")}
      </nav>
    </header>
  );
}
