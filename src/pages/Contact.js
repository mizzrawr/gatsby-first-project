import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/head'

const contact = () => {
    return (
        <Layout>
             <Head title='Contact' />
            <h1>Visit us!</h1>
            <p>Help us to help more cats 🐱  </p>
            <p>Email: cindy@dropfriends.com</p>
            <p>PN.: +34 684 103572</p>
            <p>Wanna keep in touch ? <a href='https://www.linkedin.com/in/cindy-giron/' target='_blank'>Find me on Linkedin</a> </p>
            <Link to='/'><button>Go Home</button> </Link>
        </Layout>
    )
}

export default contact
