import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/index.scss'
import {container,content} from './layout.module.scss'

const layout = (props) => {
    return (
        <div className={container}>
            <div className={content}>
            <Header />
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default layout
