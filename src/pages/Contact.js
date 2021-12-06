import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/head'

const contact = () => {
    return (
        <Layout>
             <Head title='Contact' />
            <h1>You can reach me here</h1>
            <p>Cindy Giron </p>
            <p>Email: cindy@dropfriends.com</p>
            <p>PN.: +34 684 103572</p>
            <p>Wanna keep in touch <a href='https://www.linkedin.com/in/cindy-giron/' target='_blank'>Find me on Linkedin</a> </p>
            <Link to='/'><button>Home</button> </Link>
        </Layout>
    )
}

export default contact
