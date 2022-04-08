import Animated from "../layout/Animated";

export default function Heading() {
  return (
    <Animated>
      <div className="mx-auto text-center text-primary text-4xl font-bold italic w-full">
        <q className="">
          Svako dete je umetnik. Problem je kako ostati umetnik kad odraste.
        </q>
        <p className="text-2xl">Pablo Picasso</p>
      </div>
    </Animated>
  );
}
