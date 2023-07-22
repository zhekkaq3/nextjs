import { Metadata } from "next";
import Link from "next/link";

async function getDate() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next: {
      revalidate: 60
    }
  })

  if (!response.ok) throw new Error("Enable to fetch posts!!!")

  return response.json()
}

export const metadata: Metadata = {
  title: 'Blog Zhekka',
}

export default async function Blog() {
  const posts = await getDate();

  return <>
    <h1>Blog page</h1>
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </>;
}