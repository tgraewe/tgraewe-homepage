import Logo from './logo'
import NextLink from 'next/link'
import{
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemedToggleButton from '../components/theme-toggle-button'


const LinkItem = ({ href, path, target, children}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
    const { path } = props
  
    return (
      <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{ backdropFilter: 'blur(10px)' }}
        zIndex={1}
        {...props}
      >
        <Container 
        display="flex" 
        p={2} 
        maxW="container,md"
        wrap="wrap"
        align="center"
        justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
          <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
            <LinkItem href="/works" path={path}>
            Works
            </LinkItem>
            <LinkItem href="/blog" path={path}>
            Blog
            </LinkItem>
            <LinkItem href="/toolkit" path={path}>
            Toolkit
            </LinkItem>
          </Stack>

          <Box flex={1} align="right">
          <ThemedToggleButton/>
            <Box ml={2} display={{base: 'inline-block', md:'none'}}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                  <NextLink href="/blog" passHref>
                    <MenuItem as={Link}>Blog</MenuItem>
                  </NextLink>
                  <NextLink href="/toolkit" passHref>
                    <MenuItem as={Link}>Toolkit</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>


        </Container>
      </Box>
    )
  }
  
  export default Navbar;