import Head from 'next/head'
import React from 'react'

import SRLogo from '../assets/sr.svg'
import { Container, SummonerInput } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>my rift</title>
      </Head>

      <SRLogo />
      <h1>Welcome to MyRift.</h1>
      <SummonerInput type="text" placeholder="Search your summoner name"/>  
    </Container>
  )
}
export default Home