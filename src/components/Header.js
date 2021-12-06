import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import {heading, title, navList,navItem,activeNavItem} from './header.module.scss'


const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title

            }
        }
    }
    `)

    return (
    <div>
        <nav>
            <header className={heading}>
                <h1>
                <Link className={title} to='/'>{data.site.siteMetadata.title}</Link>
                </h1>
            </header>
            <ul className={navList}>
                <li><Link className={navItem} activeClassName={activeNavItem}   to='/' >Home</Link></li>
                <li><Link className={navItem} activeClassName={activeNavItem}  to='/Blog' >Blog</Link></li>
                <li><Link className={navItem} activeClassName={activeNavItem}  to='/About'>About</Link></li>
                <li><Link className={navItem} activeClassName={activeNavItem}  to='/Contact' >Contact</Link></li>

            </ul>
        </nav>
    </div>
    )
}

export default Header
