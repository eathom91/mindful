import Layout from "../components/layout";
import Head from 'next/head'
import styles from '../styles/Signup.module.css'
import React, { useState } from "react";
const defaultEndpoint = "http://localhost:4000/api/users"
export default function Signup() {
    const [formData, setFormData] = useState({
      first:"",
      last:"",
      email:"",
      password:"",})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const res = await fetch(defaultEndpoint, {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.first,
          lastName: formData.last,
          email: formData.email,
          password: formData.password,
        })
      });
      res.json().then(body => {
        console.log(body);
      })
    }

    return (
        <Layout>
            <Head>
                
            </Head>
            <main>
                <div className={styles.form__container}>
                    <h1>Sign Up for Free!</h1>
                    <form onSubmit={handleSubmit} className={styles.signupForm}>
                        <label htmlFor="first">First Name:</label>
                        <input onChange={handleChange}
                         type="text" id="first" name="first" />
                        <label htmlFor="last">Last Name:</label>
                        <input onChange={handleChange}
                         type="text" id="last" name="last" />
                        <label htmlFor="email">Email:</label>
                        <input onChange={handleChange} 
                         type="text" id="email" name="email"/>
                        <label htmlFor="password">Password:</label>
                        <input onChange={handleChange}
                         type="text" id="password" name="password"/>
                        <button>Submit</button>
                    </form>
                </div>
            </main>
        </Layout>
    )
}