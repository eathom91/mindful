import Layout from "../components/layout";
import Head from 'next/head'
import styles from '../styles/Signup.module.css'

export default function Signup() {
    return (
        <Layout>
            <Head>
                
            </Head>
            <main>
                <div className={styles.form__container}>
                    <h1>Sign Up for Free!</h1>
                    <form action="" method="post" className={styles.signupForm}>
                        <label htmlFor="first">First Name:</label>
                        <input type="text" id="first" name="first" />
                        <label htmlFor="last">Last Name:</label>
                        <input type="text" id="last" name="last" />
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" required/>
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" name="password"/>
                        <button>Submit</button>
                    </form>
                </div>
            </main>
        </Layout>
    )
}