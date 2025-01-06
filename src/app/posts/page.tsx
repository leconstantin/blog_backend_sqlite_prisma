import Link from "next/link";
import React from "react";

type Tpost = {
  id: number;
  title: string;
};
export default async function Page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();
  return (
    <main className="text-center pt-20 px-5">
      <h1 className="text-4xl font-bold mb-5">All posts</h1>
      <ul>
        {data.posts.map((post: Tpost) => (
          <li key={post.id} className="mb-3">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
