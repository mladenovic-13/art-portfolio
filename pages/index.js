import Gallery from "../src/components/Gallery";
import Heading from "../src/components/Heading";
import Header from "../src/layout/Header";
import styles from "../styles/styles.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={`${styles.index} pt-24`}>
        <Heading />
        <Gallery />
      </div>
    </>
  );
}
