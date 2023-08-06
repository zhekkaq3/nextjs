'use client';

import { getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import useSWR from "swr";



const Posts = () => {
  const {data: posts, isLoading} = useSWR("posts", getAllPosts);


  return isLoading ? (
    <h3>Loding...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
  
}

export { Posts }