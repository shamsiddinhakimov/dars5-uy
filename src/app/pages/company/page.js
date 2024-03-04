import React from 'react'
import Image from "next/image";
import styles from "../../page.module.css"
import Link from 'next/link';

function page() {
  return (
    <div className={styles.company}>
      <h1>Company</h1>
      <Image
              src="/car.png"
              alt="Vercel Logo"
              className={styles.companyImg}
              width={600}
              height={500}
              priority
            />
      <div className={styles.grid}>
        <Link
          href="/"
          className={styles.card}
        >
          <h2>
          Home <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </Link>

        <Link
          href="/pages/company"
          className={styles.card}
        >
          <h2>
            Company <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </Link>

        <Link
          href="/pages/contact"
          className={styles.card}
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </Link>

        <Link
          href="/pages/about"
          className={styles.card}
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </Link>
      </div>
    </div>
  )
}

export default page