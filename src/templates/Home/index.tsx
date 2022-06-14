import { Container, Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Footer from '../../components/Footer'
import Card, { StacksProps } from '../../components/Card'
import Head from 'next/head'

const HomeTemplate = ({ stacks }: StacksProps) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Stacks</title>
      </Head>
      <Box bg="red.400" py="1.2rem">
        <Container maxW="container.lg" display="flex" justifyContent="end">
          <Button
            _focus={{ borderColor: 'white' }}
            onClick={() => router.push('/about')}
            ml="auto"
          >
            Sobre
          </Button>
        </Container>
      </Box>
      <Card stacks={stacks} />
      <Footer />
    </>
  )
}

export default HomeTemplate
