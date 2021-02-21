import Head from 'next/head'

// import { useRouter } from 'next/router'

import SRLogo from '../assets/sr.svg'
import { Container, SummonerInput, SearchWrapper, SearchButton } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>my rift</title>
      </Head>

      <SRLogo />
      <h1>Welcome to MyRift.</h1>

      <SearchWrapper>
        <SummonerInput type="text" placeholder="Search your summoner name"/>
        <SearchButton href="/summoner/teste">GO</SearchButton>
      </SearchWrapper> 
    </Container>
  )
}
export default Home