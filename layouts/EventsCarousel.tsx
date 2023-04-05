import Carousel from "@/components/Carousel";

export default function EventsCarousel() {
  return (
    <div>
      <h1 className="text-center font-semibold text-[40px] leading-[50px]">
        We conduct{" "}
        <span className="bg-[#C9EEFF] rounded-lg px-2">various events</span>
        <br />
        throughout the year, here are some
      </h1>
      <Carousel />
    </div>
  );
}
