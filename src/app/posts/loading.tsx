import Link from "next/link";

export default function loading() {
  return (
    <main className="text-center pt-20 px-5 flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold mb-5 block h-5 w-32 bg-zinc-500 rounded-xl animate-pulse"></h1>
      <ul>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i} className="mb-3">
            <p className="block h-2 w-24 bg-zinc-300 animate-pulse rounded-xl"></p>
          </li>
        ))}
      </ul>
    </main>
  );
}
