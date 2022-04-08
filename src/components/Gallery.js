import Image from "next/image";
import { motion } from "framer-motion";
import Animated from "../layout/Animated";

export default function Gallery() {
  return (
    <>
      <div className="pt-2 flex flex-col lg:flex-row w-11/12 mx-auto space-y-4 lg:hidden">
        <Animated>
          <Image
            objectFit="cover"
            width={600}
            height={400}
            alt=""
            src="/images/img-1.jpg"
            className="rounded-lg"
          />
        </Animated>
        <Animated>
          <Image
            objectFit="cover"
            width={600}
            height={400}
            alt=""
            src="/images/img-3.jpg"
            className="rounded-lg"
          />
        </Animated>
        <Animated>
          <Image
            objectFit="cover"
            width={600}
            height={800}
            alt=""
            src="/images/img-2.jpg"
            className="rounded-lg"
          />
        </Animated>
        <Animated>
          <Image
            objectFit="cover"
            width={600}
            height={800}
            alt=""
            src="/images/img-4.jpg"
            className="rounded-lg"
          />
        </Animated>
      </div>
    </>
  );
}
