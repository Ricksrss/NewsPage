// page.js
import React from 'react';
import Layout from './Layout'; // Substitua pelo caminho real do seu componente Layout
import Image from 'next/image';
import styles from './page.module.css';

const Home = () => {
  return (
    <Layout>
      <main className={styles.main}>
        {/* Conteúdo da página */}
        <div className={styles.description}>
          {/* ... */}
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          {/* ... */}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
