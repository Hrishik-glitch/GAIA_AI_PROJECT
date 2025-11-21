"use client";

import { useState } from "react";

export default function useGaiaState() {
  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);
    try {
      const res = await fetch("/api/state", { cache: "no-store" });
      const json = await res.json();
      setState(json.state);
    } catch (e) {
      console.error("GAIA state load error", e);
    } finally {
      setLoading(false);
    }
  }

  return { state, loading, refresh };
}
