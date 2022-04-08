import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <div className="mx-auto mt-5 gap-5 h-5/6 grid grid-cols-3 grid-rows-6 w-11/12 place-items-center">
        <div className="row-span-2">
          <Image
            objectFit="cover"
            width={430}
            height={185}
            alt=""
            src="/images/img-1.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="row-span-3">
          <Image
            objectFit="cover"
            width={430}
            height={278}
            alt=""
            src="/images/img-3.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="row-span-4">
          <Image
            objectFit="cover"
            width={430}
            height={370}
            alt=""
            src="/images/img-2.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="row-span-4">
          <Image
            objectFit="cover"
            width={430}
            height={370}
            alt=""
            src="/images/img-2.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="row-span-3">
          <Image
            objectFit="cover"
            width={430}
            height={278}
            alt=""
            src="/images/img-3.jpg"
            className="rounded-lg"
          />
        </div>
        <div className="row-span-2">
          <Image
            objectFit="cover"
            width={430}
            height={185}
            alt=""
            src="/images/img-1.jpg"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
