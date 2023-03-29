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
  const [sliderImages, setSliderImages] = useState([
    images[0],
    images[1],
    images[2],
  ]);
  const [currSlideNum, setCurrSlideNum] = useState(0);

  const handleLeftClick = () => {
    setCurrSlideNum((prev) => (prev - 1) % images.length);
    sliderImages.unshift(images[(currSlideNum - 1) % images.length]);
    sliderImages.pop();
  };
  const handleRightClick = () => {
    setCurrSlideNum((prev) => (prev + 1) % images.length);
    sliderImages.push(images[(currSlideNum + 1) % images.length]);
    sliderImages.shift();
  };

  return (
    <div className="grid place-items-center">
      <div className="flex gap-4 items-center">
        {sliderImages.map((item, index) =>
          index != 1 ? (
            <Image
              unoptimized
              key={index}
              width={14}
              height={14}
              alt=""
              src={item}
              className="w-56 h-56 object-cover rounded-xl blur-[2px]"
            />
          ) : (
            <Image
              unoptimized
              key={index}
              width={20}
              height={20}
              alt=""
              src={item}
              className="w-72 h-72 object-cover rounded-xl"
            />
          )
        )}
      </div>
      <p>
        <span className="text-sm">{currSlideNum + 1}</span>
        <span className="text-xl">/{images.length}</span>
      </p>
      <div className="flex gap-12">
        <BsArrowLeft onClick={handleLeftClick} />
        <BsArrowRight onClick={handleRightClick} />
      </div>
    </div>
  );
}
