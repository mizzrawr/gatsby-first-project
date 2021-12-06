import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/head'

const IndexPage = ()=>{
return(
  <Layout>
    <Head title='Home' />
    <h1>Welcome to our lovely Katzencafé 🐱 </h1>
      <h2>Here you will find more information about our place</h2>
      <p>Wanna keep in touch <Link to='/Contact'>Contact us</Link> </p>

      <p>Wanna know more about me?<Link to='/About'>About us</Link> </p>
  </Layout>
)


}

export default IndexPage;