import StacksTemplates, { StacksTemplateProps } from '../../templates/Stacks'
import client from '../../graphql/client'
import { GET_STACKS, GET_STACKS_BY_SLUG } from '../../graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import {
  GetStacksBySlugQuery,
  GetStacksQuery
} from '../../graphql/generated/graphql'
import { useRouter } from 'next/router'

export default function Stacks({ stack }: StacksTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return (
    <>
      <StacksTemplates stack={stack} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { stacks } = await client.request<GetStacksQuery>(GET_STACKS, {
    first: 3
  })

  const paths = stacks.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { stack } = await client.request<GetStacksBySlugQuery>(
    GET_STACKS_BY_SLUG,
    { slug: `${params?.slug}` }
  )

  if (!stack) return { notFound: true }

  return {
    revalidate: 5,
    props: {
      stack
    }
  }
}
