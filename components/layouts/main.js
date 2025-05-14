import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tom's - Homepage</title>
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"></link>
        <link rel="manifest" href="images/site.webmanifest"></link>
      </Head>
      
      <Navbar></Navbar>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main;