"use client";
import React from "react";
import Image from "next/image";
import styles from "./ErrorPage.module.css";
import Link from "next/link";

interface ErrorPageProps {
  title: string;
  description: string;
  button: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  title,
  description,
  button,
}) => {
  return (
    <body className={styles.bgPurple}>
      <div className={styles.stars}>
        <div className={styles.centralBody}>
          <Image
            className={styles.image404}
            src="http://salehriaz.com/404Page/img/404.svg"
            alt=""
            width={400}
            height={400}
          />
          <Link href="/" className={styles.btnGoHome}>
            {button}
          </Link>
        </div>
        <div className={styles.objects}>
          <Image
            alt=""
            className={styles.objectRocket}
            src="http://salehriaz.com/404Page/img/rocket.svg"
            width={100}
            height={100}
          />
          <div className={styles.earthMoon}>
            <Image
              alt=""
              className={styles.objectEarth}
              src="http://salehriaz.com/404Page/img/earth.svg"
              width={100}
              height={100}
            />
            <Image
              alt=""
              className={styles.objectMoon}
              src="http://salehriaz.com/404Page/img/moon.svg"
              width={80}
              height={80}
            />
          </div>
          <div className={styles.boxAstronaut}>
            <Image
              alt=""
              className={styles.objectAstronaut}
              src="http://salehriaz.com/404Page/img/astronaut.svg"
              width={140}
              height={140}
            />
          </div>
        </div>
        <div className={styles.glowingStars}>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
          <div className={styles.star}></div>
        </div>
      </div>
    </body>
  );
};

export default ErrorPage;
