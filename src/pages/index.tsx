import client from '../graphql/client'
import { GetStaticProps } from 'next'

import HomeTemplate from '../templates/Home'

import { GET_STACKS } from '../graphql/queries'
import { GetStacksQuery } from '../graphql/generated/graphql'
import { StacksProps } from '../components/Card'

const Home = ({ stacks }: StacksProps) => {
  return (
    <>
      <HomeTemplate stacks={stacks} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // é uma string
  const { stacks } = await client.request<GetStacksQuery>(GET_STACKS)

  if (!stacks) return { notFound: true }

  return {
    revalidate: 5,
    props: {
      stacks: stacks
    }
  }
}

export default Home
