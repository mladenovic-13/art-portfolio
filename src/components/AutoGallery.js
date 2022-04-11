import React from "react";
import Animated from "../layout/Animated";
import Image from "next/image";

export default function AutoGallery() {
  return (
    <div className="flex flex-col lg:flex-row w-11/12 mx-auto">
      <div className="m-1">
        <Animated>
          <Image
            objectFit="cover"
            width={1000}
            height={600}
            alt=""
            src="/images/ljuba1.jpg"
            className="rounded-lg"
          />
        </Animated>
      </div>

      <div className="m-1">
        <Animated>
          <Image
            objectFit="cover"
            width={800}
            height={600}
            alt=""
            src="/images/ljuba3.jpg"
            className="rounded-lg"
          />
        </Animated>
      </div>
      <div className="m-1">
        <Animated>
          <Image
            objectFit="cover"
            width={800}
            height={600}
            alt=""
            src="/images/ljuba4.jpg"
            className="rounded-lg"
          />
        </Animated>
      </div>
      <div className="m-1">
        <Animated>
          <Image
            objectFit="cover"
            width={800}
            height={600}
            alt=""
            src="/images/ljuba5.jpg"
            className="rounded-lg"
          />
        </Animated>
      </div>
      <div className="m-1">
        <Animated>
          <Image
            objectFit="cover"
            width={800}
            height={400}
            alt=""
            src="/images/ljuba6.jpg"
            className="rounded-lg"
          />
        </Animated>
      </div>
    </div>
  );
}
