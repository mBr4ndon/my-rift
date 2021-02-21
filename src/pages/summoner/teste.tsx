import { GetStaticProps } from 'next'

type Summoner = {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  summonerLevel: number;
}

type SummonerProps = {
  summoner: Summoner;
}

export function Teste( { summoner } : SummonerProps) {
  return (
    <>
      <h1>Summoner {summoner.name}</h1>
      <p>level {summoner.summonerLevel}</p>
    </>
  ) 
}
export default Teste

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/mBrandon23?api_key=${process.env.API_KEY_RIOT_GAMES}`);
  const data = await response.json();

  
  return {
    props: {
      summoner: data
    },
    revalidate: 600
  }
}