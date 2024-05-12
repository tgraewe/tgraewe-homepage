import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Toolkit is in development</Heading>
      <Text>Come back later :)</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="blue">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound