import Gallery from "../src/components/Gallery";
import Header from "../src/layout/Header";
import styles from "../styles/styles.module.css";
import Hero from "../src/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className={`${styles.index} pt-3`}>
        <Hero />
        <Gallery />
      </div>
    </div>
  );
}
