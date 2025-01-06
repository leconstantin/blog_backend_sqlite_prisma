import { prisma } from "@/lib/db";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type Tparams = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
    },
  });

  return posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));
}

export async function generateMetadata({ params }: Tparams): Promise<Metadata> {
  const id = (await params).id;
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!post) return notFound();
  return {
    title: post.title,
  };
}

export default async function Page({ params }: Tparams) {
  const id = (await params).id;
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!post) return notFound();
  return (
    <main className="text-center pt-24 px-7">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
