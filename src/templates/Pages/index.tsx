import { Heading, Container, Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Head from 'next/head'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplates = ({ heading, body }: PageTemplateProps) => {
  const router = useRouter()
  if (router.isFallback) return null
  return (
    <>
      <Head>
        <title>Stacks | {heading}</title>
      </Head>
      <Box bg="red.400">
        <Container maxW="container.lg" centerContent>
          <Box mt="2rem" mb="5rem">
            <Heading mb="1rem" textAlign="center">
              {heading}
            </Heading>
            <Box color="white" dangerouslySetInnerHTML={{ __html: body }} />
            <Box display="flex" justifyContent="end">
              <Button
                _focus={{ borderColor: 'white' }}
                mt="2rem"
                onClick={() => router.push('/')}
              >
                Voltar
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default PageTemplates
