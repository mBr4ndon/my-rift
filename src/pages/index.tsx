import Head from 'next/head'
import React from 'react'

import LeagueLogo from '../assets/lol.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>my rift</title>
      </Head>

      <LeagueLogo />
      <h1>Welcome to my rift</h1>
      <p>Search for your summoner name</p>     
    </Container>
  )
}
export default Home