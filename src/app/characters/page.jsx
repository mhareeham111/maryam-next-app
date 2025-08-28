"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://potterapi-fedeperin.vercel.app/en/characters");
      setCharacters(res.data);
    }
    fetchData();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold  text-amber-300 mb-6">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {characters.map((char, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4">
            <h2 className="font-semibold">{char.character}</h2>
            <p className=" text-amber-300">
              House: {char.hogwartsHouse || "Unknown"}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
