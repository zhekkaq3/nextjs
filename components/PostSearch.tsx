'use client';

import { FormEventHandler, useState } from "react";
import { getPostsBySearch } from "@/services/getPosts";
import useSWR from "swr";

const PostSearch = () => {
 
  const { mutate } = useSWR('posts');

  const [ search, setSearch ] = useState("");

  const handlSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const posts = await getPostsBySearch(search);

    mutate(posts)

  }

  return (
    <form onSubmit={handlSubmit}>
      <input type="search" placeholder="search" value={search} onChange={event => setSearch(event.target.value)} />
      <button type="submit">serach</button>
    </form>
  )
}
export { PostSearch };