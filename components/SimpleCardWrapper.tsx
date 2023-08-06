
import { NasaObject } from "@/types/types";
import { Card, CardContent } from "./ui/card";


const SimpleCardWrapper = ({ data, title } : { data: NasaObject[], title: string}) => {
  return (
    <>
      <h3 className="px-2 mt-4 text-2xl font-bold text-gray-700 uppercase">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7">
        
          {data.map((post) => (
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
          ))}
        
      </div>
    </>
  );
};

export default SimpleCardWrapper;