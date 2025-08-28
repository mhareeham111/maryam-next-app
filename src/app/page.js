// export default function Page() {
//   return (
//     <main className="p-6">
//       <h1 className="text-2xl font-bold">Welcome to the Harry Potter API Demo ✨</h1>
//       <p className="mt-4">Explore characters, books, and spells using the links above.</p>
//     </main>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const lower = query.toLowerCase();
    if (["home", "/"].includes(lower)) router.push("/");
    else if (lower === "characters") router.push("/characters");
    else if (lower === "books") router.push("/books");
    else if (lower === "spells") router.push("/spells");
    setQuery(""); // clear input
  };

  return (
    <main className="p-6 flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-2xl font-bold">
        Welcome to the Harry Potter API Demo 
      </h1>
      <p className="mt-4">
        Explore characters, books, and spells using the links above.
      </p>

      {/* 🔍 Search input */}
      <form onSubmit={handleSearch} className="mt-6 flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search (home, characters, books, spells)"
          className="bg-white text-gray-700 placeholder-gray-400 p-2 rounded-md w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-300"
        />

        <button
          type="submit"
          className="bg-amber-300 text-white px-4 py-2 rounded-md"
        >
          Go
        </button>
      </form>
    </main>
  );
}
