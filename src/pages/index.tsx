import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const Home: React.FC = () => (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Hello World!
            </h1>
        </main>
    </div>
);

export default Home;
