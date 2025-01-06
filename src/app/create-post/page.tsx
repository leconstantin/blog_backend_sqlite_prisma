import { createPost } from "@/actions/actions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import React from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl font-bold mb-5">Create Post</h1>
      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          required
          className="border rounded px-3 h-full outline-none focus:ring-1 "
        />
        <button className="h-full bg-blue-500 px-5 rounded text-white ">
          Submit
        </button>
      </form>
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
