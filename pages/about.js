import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const About = () => (
  <div>
  <Head>
    <title>About</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <h1>About the site</h1>
  </div>
)

export default About;