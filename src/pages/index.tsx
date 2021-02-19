import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<{ error: string } | null>(null);

    const signup = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post('api/signup', { firstName, lastName, email });
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
            setError(err.response.data);
        }
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                {error ? <h1>{error.error}</h1> : null}
                <form>
                    <input type="text" placeholder="First Name ..." onChange={(e) => setFirstName(e.target.value)} />
                    <br />
                    <input type="text" placeholder="Last Name ..." onChange={(e) => setLastName(e.target.value)} />
                    <br />
                    <input type="email" placeholder="Email ..." onChange={(e) => setEmail(e.target.value)} />
                    <br />

                    <button type="submit" onClick={(e: React.MouseEvent) => signup(e)}>Ok</button>
                </form>
            </main>
        </div>
    );
};

export default Home;
