import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = ()=> {
    return (
        <Layout>
            <Head title='About' />
            <h1>this is me</h1>
            <p>I'm a lonely wolf living in your dreams</p>
            <p>this is a Link to <Link to='/contact'>contact </Link>  </p>
            <Link to='/'><button>Home</button> </Link>

        </Layout>
    )
}
export default AboutPage