import React from 'react'
import {  graphql, useStaticQuery } from 'gatsby'
import {footer} from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
    site{
        siteMetadata{
            author

        }
    }
    }
    `)
    return (
        <footer className={footer}>
            <p>Created with 💝 by {data.site.siteMetadata.author}, &copy;2021 </p>
        </footer>
    )
}

export default Footer
