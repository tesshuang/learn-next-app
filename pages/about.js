import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const About = () => (
  <div>
  <Head>
    <title>About</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <h1>About the site</h1>
    </Layout>
  </div>
)

export default About;