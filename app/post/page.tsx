import { PostSearch } from "@/components/PostSearch";
import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import styles from "./styles.module.css";


export const metadata: Metadata = {
  title: 'Blog Zhekka',
}

export default function Garilla() {
  return (
    <div className="mt-20 grid grid-cols-2 p-14">
      <PostSearch />
      <Posts />
    </div>);
}
