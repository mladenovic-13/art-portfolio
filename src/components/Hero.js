import Image from "next/image";
import Heading from "./Heading";

export default function Hero() {
  return (
    <section className="w-5/6 mx-auto mt-12 flex flex-row justify-evenly place-items-center ">
      <div>
        <Image
          objectFit="cover"
          src="/images/img-1.jpg"
          alt=""
          width={640}
          height={560}
          className="rounded-lg drop-shadow-2xl shadow-black"
        />
      </div>
      <div className="w-1/2">
        <Heading />
      </div>
    </section>
  );
}
