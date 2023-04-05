import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex items-center gap-36">
      <div>
        <h2 className="font-semibold text-7xl leading-[90px]">About Us</h2>
        <p className="mt-8 mb-12 font-normal text-xl leading-6">
          Quanta Society is a departmental association and a student-led
          organization that brings together passionate individuals who are
          interested in the intersection of technology, design, and innovation.
        </p>
        <Link
          href="/team"
          className="bg-[#97DEFF] rounded-full text-2xl leading-7 font-normal px-8 py-4"
        >
          View Team
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center p-24 aspect-square bg-[#62CDFF] rounded-[20px]">
        <Image
          src="/about_illustration.svg"
          alt=""
          width={463}
          height={233}
        ></Image>
        <p className="mt-24 font-normal text-xl leading-6">
          We foster a culture of creativity, innovation, and exploration, and
          provides a supportive community for members to develop their passion
          and interests in technology such as Robotics & Embedded system,
          design, webD and beyond.
        </p>
      </div>
    </div>
  );
}
