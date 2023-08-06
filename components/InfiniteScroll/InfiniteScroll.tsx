"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Spinner } from "../ui/spinner";
import { NasaObject } from "@/types/types";


const api = process.env.NEXT_PUBLIC_API;

export function InfiniteScrollWrapper() {

  const [posts, setPosts] = useState<NasaObject[]>([]);
  const [latest, setLatest] = useState<string | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);

  useEffect(() => {
    getStartEndDates(null);
  }, []);

  const fetchData = async (startDate: string|null, endDate: string|null) => {
    const res = await axios.get(
      `${api}${startDate ? "&start_date=" + startDate : null}${
        endDate ? "&end_date=" + endDate : null
      }`
    );
    
    setPosts([...posts, ...res.data.reverse()]);
    getStartEndDates(latest);
  };

  const getStartEndDates = (latest: string | null) => {
    let todaysDate = moment().format("YYYY-MM-DD"); // todays date
    let endDate = latest
      ? latest
      : moment(todaysDate).subtract(9, "days").format("YYYY-MM-DD");
    let startDate = moment(endDate).subtract(20, "days").format("YYYY-MM-DD");
    let latestDate = moment(startDate).subtract(1, "days").format("YYYY-MM-DD");
    setEnd(endDate);
    setStart(startDate);
    setLatest(latestDate);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={posts.length} //This is important field to render the next data
        next={() => fetchData(start, end)}
        className="flex items-center justify-center pt-20"
        hasMore={true}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-10">
          {posts ? (
            posts.map((post) => (
              <Card key={post.hdurl} className="flex flex-col items-center justify-center" >
                <CardContent className="flex flex-col items-center justify-center h-full w-full">
                  <img
                    src={post.url}
                    alt={post.title}
                    className="object-cover h-full w-full rounded"
                  />
                </CardContent>
                {/* <CardFooter className="text-center flex flex-col p-4">
              <CardTitle className="my-2">{post.title}{post.date}</CardTitle>
              <CardDescription>{post.explanation}</CardDescription>
            </CardFooter> */}
              </Card>
            ))
          ) : (
            <div className="text-xl font-bold">No images available !! </div>
          )}
        </div>
      </InfiniteScroll>
    </>
  );
}