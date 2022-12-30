import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mindful</title>
        <meta name="description" content="Mindful App SEO Things/Home" />
      </Head>
      <main> 
        <h1>Home Page</h1>
      </main>
    </Layout>
  )
}
