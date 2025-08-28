"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SpellsPage() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://potterapi-fedeperin.vercel.app/en/spells");

        // if the API wraps data inside { spells: [...] }
        const data = Array.isArray(res.data) ? res.data : res.data.spells;

        setSpells(data || []);
      } catch (err) {
        console.error("Failed to fetch spells:", err);
        setSpells([]); // fallback to empty array
      }
    }
    fetchData();
  }, []);

  return (
    <main className="p-6 grid sm:grid-cols-1 gap-6">
      <h1 className="text-3xl font-bold text-neutral-50 mb-6">Spells</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {spells.map((spell, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-2">
            <h2 className="font-semibold text-2xl text-center text-amber-200">{spell.spell}</h2>
            <p className="text-gray-600 text-center">{spell.use || "No description"}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
