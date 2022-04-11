import Image from "next/image";
import Link from "next/link";
import Animated from "../layout/Animated";
import Heading from "./Heading";

export default function Hero() {
  return (
    <Animated>
      <section className="hidden lg:flex w-5/6 pb-20 mx-auto mt-12 flex-row justify-evenly place-items-center ">
        <div className="grid gap-4 grid-cols-2 grid-rows-2 place-items-center">
          <div className="col-span-2">
            <Image
              objectFit="cover"
              src="/images/img-5.jpg"
              alt=""
              width={600}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              objectFit="cover"
              src="/images/img-3.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              objectFit="cover"
              src="/images/img-1.jpg"
              alt=""
              width={500}
              height={500}
              className="rounded-lg "
            />
          </div>
        </div>
        <div className="pl-16 flex flex-col items-center">
          <div className="">
            <Heading />
          </div>
          <Link href="/galerija" passHref>
            <button className="hover:scale-110 transition duration-200 mt-8 rounded-md uppercase w-40 h-12 bg-primary text-bg-primary text-2xl font-semibold ">
              galerija &#8594;
            </button>
          </Link>
        </div>
      </section>
    </Animated>
  );
}
