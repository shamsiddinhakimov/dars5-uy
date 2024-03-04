import React from "react";
import styles from "../../page.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={`${styles.about} ${styles.container}`}>
      <h1>About</h1>
      <p>Explore starter templates for Next.js.</p>
    </div>
  );
}

export default page;
