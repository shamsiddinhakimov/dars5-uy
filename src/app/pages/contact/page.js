import React from 'react'
import styles from "../../page.module.css"
import Link from 'next/link'

function page() {
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <h3>Number <span>+99891234567</span></h3>
      <h3>Number <span>+99897654321</span></h3>
      <h3>Number <span>+99899999999</span></h3>
      <h3>Number <span>+99833333333</span></h3>
      <h3>Number <span>+99891505050</span></h3>
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