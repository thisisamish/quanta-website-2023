import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10">
      <div className="mb-24 flex items-start gap-28">
        <Image src="/logo.svg" alt="" width={328} height={84}></Image>
        <div>
          <h3 className="mb-2 font-bold text-lg">Address</h3>
          <p>
            JSS Academy of Technical Education,
            <br />
            Sector-62, Noida,
            <br />
            Uttar Pradesh,
            <br />
            India
            <br />
            Pincode - 201301
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-lg">Get In Touch</h3>
          <div className="flex gap-[1px]">
            <Link href="mailto:officialquanta@gmail.com">
              officialquanta@gmail.com
            </Link>
            <Image
              src="/arrow_up_right.svg"
              alt=""
              width={20}
              height={20}
            ></Image>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-lg">Socials</h3>
          <div className="flex flex-col">
            <Link href="/">Instagram</Link>
            <Link href="/">LinkedIn</Link>
            <Link href="/">Discord</Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>© 2023 JSS Quanta</div>

        <Link href="/" className="flex gap-[1px]">
          <Image src="/arrow_up_left.svg" alt="" width={20} height={20}></Image>
          <p>Get To Top</p>
        </Link>
      </div>
    </footer>
  );
}
