import React from "react";
import AutoGallery from "../../src/components/AutoGallery";
import Animated from "../../src/layout/Animated";
import Header from "../../src/layout/Header";
import styles from "../../styles/styles.module.css";

export default function index() {
  const imgUrls = [
    { url: "/images/img-1.jpg", width: 600, height: 600 },
    { url: "/images/img-1.jpg", width: 600, height: 600 },
    { url: "/images/img-1.jpg", width: 600, height: 600 },
    { url: "/images/img-1.jpg", width: 600, height: 600 },
    { url: "/images/img-1.jpg", width: 600, height: 600 },
  ];

  return (
    <div className="">
      <Header />

      <div className={`${styles.index} pt-3`}>
        <Animated>
          <div className="mx-auto text-center text-primary text-4xl font-bold italic w-full">
            <p>SRECAN RODJENDAN</p>
            <p>
              Na zahtev Zorana Mladenovica, a pravi portfolio ce biti uskoro!
            </p>
          </div>
        </Animated>
        <AutoGallery />
      </div>
    </div>
  );
}
