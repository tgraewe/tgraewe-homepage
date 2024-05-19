import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} <a rel="nofollow" href="">Tommaso Graewe</a>. All Rights Reserved.
    </Box>
  )
}

export default Footer