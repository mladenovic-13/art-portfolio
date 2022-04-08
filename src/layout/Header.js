import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="top-0 z-20 absolute grid grid-cols-3 bg-primary w-full text-2xl text-bg-primary place-items-center">
      <div className="transition ease-in-out hover:scale-110 duration-200 hover:text-white">
        <Link href="#">O meni</Link>
      </div>
      <div className="ml-4 mt-1 transition ease-in-out hover:scale-110 duration-200 hover:text-white">
        <Image alt="" src="/images/logo.png" width={200} height={60}></Image>
      </div>

      <div className="ransition ease-in-out hover:scale-110 duration-200 hover:text-white">
        <Link href="#">Kontakt</Link>
      </div>
    </div>
  );
}
