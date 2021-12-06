import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = ()=>{
return(
  <Layout>
    <Head title='Home' />
    <h1>hello</h1>
      <h2>Im cindy</h2>
      <p>Wanna keep in touch <Link to='/Contact'>Contact me</Link> </p>

      <p>Wanna know more about me?<Link to='/About'>about me</Link> </p>
  </Layout>
)


}

export default IndexPage;