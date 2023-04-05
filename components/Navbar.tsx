import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="my-10 flex justify-between items-center mx-auto">
      <Image
        src="/logo.svg"
        alt="Logo of Quanta"
        width={186}
        height={48}
      ></Image>
      <div className="flex gap-10 items-center text-xl leading-6 font-light">
        <Link href="/">Home</Link>
        <Link href="/team">Team</Link>
        <Link href="resources">Resources</Link>
        <Link href="/contact">Get In Touch</Link>
      </div>
      <button className="py-3 px-[26px] flex gap-1 items-center text-xl leading-6 font-normal border border-black rounded-full">
        <div>Zealicon</div>
        <Image src="/arrow_up_right.svg" alt="" width={20} height={20}></Image>
      </button>
    </nav>
  );
}
