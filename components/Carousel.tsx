import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

export default function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1680034200882-698487d46a79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1679997091146-f31151716910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1679661341293-075d3f017d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    "https://images.unsplash.com/photo-1680009084520-42528e128a0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1680000498724-3d0f002060be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  ];
  const [currSlideNum, setCurrSlideNum] = useState(0);

  const mod = (n: number, m: number) => {
    let result = n % m;
    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  const handleLeftClick = () => {
    setCurrSlideNum((prev) => mod(prev - 1, images.length));
  };
  const handleRightClick = () => {
    setCurrSlideNum((prev) => mod(prev + 1, images.length));
  };

  return (
    <div className="h-[600px] relative overflow-hidden">
      {images.map((item: string, i: number) => {
        const indexLeft = mod(currSlideNum - 1, images.length);
        const indexRight = mod(currSlideNum + 1, images.length);

        let className = "";

        if (i === currSlideNum) {
          className =
            "rounded-xl absolute top-0 bottom-0 left-0 right-0 m-auto aspect-square h-[400px] object-cover duration-500 opacity-100 scale-100 z-[99]";
        } else if (i === indexRight) {
          className =
            "rounded-xl absolute top-0 bottom-0 left-0 right-0 m-auto aspect-square h-[400px] object-cover z-0 duration-500 translate-x-[91%] scale-75 opacity-30";
        } else if (i === indexLeft) {
          className =
            "rounded-xl absolute top-0 bottom-0 left-0 right-0 m-auto aspect-square h-[400px] object-cover z-0 duration-500 -translate-x-[91%] scale-75 opacity-30";
        } else
          className =
            "rounded-xl absolute top-0 bottom-0 left-0 right-0 m-auto aspect-square h-[400px] object-cover z-0 opacity-0 duration-500";

        return (
          <Image
            unoptimized
            width={400}
            height={400}
            key={i}
            className={className}
            src={item}
            alt=""
          />
        );
      })}
      <p className="absolute top-[500px] bottom-0 right-0 left-0 z-[100] m-auto grid grid-flow-col place-items-center">
        <span className="text-lg">
          {currSlideNum + 1}
          <span className="text-2xl font-medium">/{images.length}</span>
        </span>
      </p>
      <div className="absolute w-32 top-[575px] bottom-0 right-0 left-0 z-[100] m-auto grid grid-flow-col place-items-center">
        <BsArrowLeft onClick={handleLeftClick} className="text-3xl" />
        <BsArrowRight onClick={handleRightClick} className="text-3xl" />
      </div>
    </div>
  );
}
