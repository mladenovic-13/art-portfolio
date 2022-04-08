import Gallery from "../src/components/Gallery";
import Heading from "../src/components/Heading";
import Header from "../src/layout/Header";
import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className={`${styles.index} pt-3`}>
        <Heading />
        <Gallery />
      </div>
    </div>
  );
}
