import { Heading, Img, Box, Flex, Container, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Footer from '../../components/Footer'

export type StacksTemplateProps = {
  stack: {
    name: string
    description: {
      html: string
    }
    gallery: {
      url: string
    }
  }
}

const StacksTemplates = ({ stack }: StacksTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null
  return (
    <>
      <Head>
        <title>Stacks | {stack.name}</title>
      </Head>
      <Box bg="red.400">
        <Container maxW="container.lg" p="6" centerContent>
          <Flex gap="4rem" wrap="wrap" py="4rem">
            <Box maxW="500px" mx="auto">
              <Img src={stack.gallery.url} borderRadius="5px" alt="" />
            </Box>
            <Box maxW={{ base: '100%', lg: '400px' }}>
              <Heading>{stack.name}</Heading>
              <Box
                mt="1rem"
                color="white"
                dangerouslySetInnerHTML={{ __html: stack.description.html }}
              />
              <Button
                _focus={{ borderColor: 'white' }}
                mt="1rem"
                onClick={() => router.push('/')}
              >
                Voltar
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </>
  )
}

export default StacksTemplates
