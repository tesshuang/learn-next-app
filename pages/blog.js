import React from 'react';
import Head from 'next/head'
import Nav from '../components/nav';
import posts from '../posts.json';
import Link from 'next/link';

const Blog = () => {
  // console.log(Object.entries(posts));
  // const postData = ;
  return (
    <div>
    <Head>
      <title>Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Nav />
      <div className="container">
        <h1>Welcome to my blog page</h1>
        <p>Stay tuned with my lasted blog topics.</p>
        <ul>
          {Object.entries(posts).map(obj => {
            return (
              <li key={obj[0]}>
                <Link href={`/blog/${obj[0]}`} >
                  <a>{obj[1].title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <style jsx>{`
        .container {
          padding: 0 2rem;
        }
        h1 {
          font-size: 3rem;
          color: #297373;
        }
        ul {
          list-style: none;
          padding-inline-start 0px;
        }
        li {

          padding: 5px;
        }
        li > a:hover {
          cursor: pointer;
        }
      `}</style>
    </div>)
};


export default Blog;