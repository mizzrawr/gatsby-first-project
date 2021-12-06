import React from 'react'
import Layout from '../components/Layout'
import {  graphql, useStaticQuery, Link } from 'gatsby'
import {posts, post} from './blog.module.scss'
import Head from '../components/head'

const BlogPage = ()=>{
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort:{
          fields:publishedDate
          order: DESC
        }
      ){
        edges{
          node{
            title
            slug
            publishedDate(formatString:"DD-MM-YYYY")
          }
        }
      }
    }
    `)

    return (
        <Layout>
            <Head title='Blog' />
            <h1>Menu</h1>
                <ol className={posts}>
                   {data.allContentfulBlogPost.edges.map((edges) => {
                    return (
                        <li className={post}>
                          <Link to={`/blog/${edges.node.slug}`}>
                            <h2>{edges.node.title}</h2>
                          
                            <p>{edges.node.publishedDate}</p>
                          </Link>
                        </li>
                    )
                   })}
                </ol>
        </Layout>
    )
}

export default BlogPage;