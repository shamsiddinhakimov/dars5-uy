import React from 'react'
import styles from "../../page.module.css";
import Link from 'next/link';

function page() {
  return (
    <div className={`${styles.about} ${styles.container}`}>
        <h1>About</h1>
        <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A odio, nisi accusantium maiores illum earum iure quaerat cupiditate expedita quae enim consequatur saepe qui ad eligendi. Quod, dolor odit saepe blanditiis nam omnis, dolores ut velit porro placeat tempora eaque suscipit rerum sit laudantium reiciendis expedita aliquam magnam. Eos fugit veritatis praesentium nemo rem repudiandae totam exercitationem voluptatem, laudantium illum nostrum! Blanditiis ad dolore non amet magni vel omnis libero fuga optio, soluta asperiores praesentium ipsum iste perferendis! Fugit aspernatur, quod corporis dolorum sequi, sed unde ullam fuga dolore eius excepturi mollitia id dolor hic ex quae cumque maxime! Perferendis totam, saepe, non ullam ducimus pariatur sapiente maxime consequuntur consequatur iste in deserunt velit tempora, sunt illo. Molestias iusto dolores quisquam necessitatibus accusantium ex sunt dolorum unde tempora modi. Deserunt, fugit. Consequatur voluptatibus qui, ex totam voluptates repudiandae, recusandae adipisci natus debitis facilis neque. Velit explicabo adipisci minima placeat exercitationem iusto nisi soluta eum saepe consectetur? Debitis accusamus quaerat perferendis quia suscipit quis dolorum in libero aspernatur voluptatibus molestias nostrum, neque recusandae inventore expedita provident impedit harum dolor id? Adipisci quas optio dolor numquam cum quo doloribus, quis aliquam nesciunt voluptatem doloremque voluptas voluptatum. Libero vitae ratione consequuntur! Tenetur porro et rem dignissimos beatae eum eaque harum ex laboriosam laudantium animi, alias eveniet quo quos consectetur obcaecati eius dolor magni autem, temporibus nisi! Officiis ratione soluta repellat dolore a exercitationem dicta laudantium nobis tempora. Labore, ducimus. Ex error molestiae totam sequi quos non nemo commodi animi recusandae delectus ipsum repellat consequatur voluptatum qui cupiditate aperiam maxime ab soluta, maiores quae amet eos rerum corporis. Veniam repudiandae, expedita ullam porro blanditiis eum nam natus suscipit quis fugiat quaerat inventore necessitatibus, harum quam ducimus itaque architecto? Itaque, esse recusandae. Consequuntur esse consectetur, fugit laborum commodi corporis, nesciunt itaque dolorem assumenda natus, repellat in suscipit asperiores deleniti. Nobis natus incidunt assumenda et voluptatibus possimus minus ratione repudiandae in beatae amet veritatis pariatur unde ex expedita alias blanditiis saepe, quidem obcaecati? Vel recusandae eos reprehenderit facere corrupti, labore tempora ducimus ab. Possimus asperiores quisquam quos cum eveniet, obcaecati exercitationem eos, ipsa sequi suscipit sint perspiciatis recusandae fugit commodi voluptatem sapiente facere explicabo distinctio, doloremque deserunt? Asperiores atque laudantium nisi quam odio accusamus officiis, tempora ipsa possimus veniam animi repellat consequuntur doloribus optio minima aliquid impedit, necessitatibus cum totam iusto. Quisquam, error ratione itaque voluptatem provident fuga repellendus porro blanditiis neque quam explicabo consequuntur aperiam eaque tenetur! Pariatur doloremque quia laudantium veniam nesciunt explicabo illum inventore! Quidem accusantium, eius molestiae voluptatibus, iure iste enim nihil cumque neque cupiditate eum ratione maxime corrupti atque eos! Nihil aliquam, inventore atque repudiandae reiciendis exercitationem et vero tempora consequuntur ipsam ullam necessitatibus ratione libero blanditiis sed nesciunt accusantium minima quos? Amet distinctio velit voluptates, minima eos mollitia reiciendis debitis delectus veniam! Magni officiis quae cupiditate, soluta reprehenderit animi ullam dignissimos rem itaque expedita ipsam laborum natus amet numquam doloribus quis ad praesentium nobis ipsa eligendi. Nobis ab quo labore, consequatur beatae cum quod ea quidem. Quos officiis modi natus.
    </p>
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