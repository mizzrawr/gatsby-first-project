import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/head'

const AboutPage = ()=> {
    return (
        <Layout>
            <Head title='About' />
            <h1>Meiga Café, the best Katzenkaffee in Germany</h1>
            <p>We are here to save tons of kitties</p>
            <p>Wanna keep in touch? <Link to='/contact'>contact </Link>  </p>
            <Link to='/'><button>Home</button> </Link>

        </Layout>
    )
}
export default AboutPage