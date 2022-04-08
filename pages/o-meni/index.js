import styles from "../../styles/styles.module.css";
import Header from "../../src/layout/Header";
import Heading from "../../src/components/Heading";
import Gallery from "../../src/components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <div className={`${styles.index} pt-3`}>
        <Heading />
        <Gallery />
      </div>
    </>
  );
}
