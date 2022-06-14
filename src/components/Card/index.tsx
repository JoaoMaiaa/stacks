import { Container, Box, Flex, Divider, Button, Img } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export type StacksCardTemplateProps = {
  slug: string
  description: {
    html: string
  }
  galleryStack: {
    url: string
  }
  gallery: {
    url: string
  }
  name: string
}

export type StacksProps = {
  stacks: StacksCardTemplateProps[]
}

const Card = ({ stacks }: StacksProps) => {
  const router = useRouter()
  return (
    <>
      <Container maxW="container.xl">
        <Flex gap="2rem" my="2rem" wrap="wrap" display="flex" justify="center">
          {stacks.map((stack, key) => (
            <Box
              key={key}
              color="white"
              p="4"
              borderRadius="5px"
              bg="red.400"
              maxW={{ base: '20rem' }}
            >
              <Img
                src={stack.galleryStack.url}
                m="auto"
                mb="0.5rem"
                objectFit="cover"
                boxSize="100px"
                alt={stack.name}
              />
              <Divider />
              <Box
                my="2rem"
                noOfLines={3}
                dangerouslySetInnerHTML={{
                  __html: stack.description.html || ''
                }}
              ></Box>
              <Button
                _focus={{ borderColor: 'white' }}
                _hover={{ bg: 'white', color: 'black' }}
                variant="outline"
                onClick={() => router.push(`stacks/${stack.slug}`)}
              >
                Ver mais
              </Button>
            </Box>
          ))}
        </Flex>
      </Container>
    </>
  )
}

export default Card
