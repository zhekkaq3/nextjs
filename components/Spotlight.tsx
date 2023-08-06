import { NasaObject } from "@/types/types";

const Spotlight = ({ data }: { data: NasaObject }) => {
  
  return (
    <div
      className="p-6 w-full h-2/3 pt-14 mt-10"
      style={{
        background: `url("${data.url}")`,
      }}
    >
      <div className="relative h-full">
        <h3 className="text-4xl text-gray-700 mb-2">{data.title}</h3>
        <p className="text-sm text-gray-700 font-semibold">{`Author : "${data.copyright}"`}</p>
        <p className="absolute bottom-0 right-0 text-sm text-gray-700 font-semibold w-1/3">{data.explanation}</p>
      </div>
    </div>
  );
};

export default Spotlight;
