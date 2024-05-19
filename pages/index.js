import NextLink from 'next/link';
import { Container, Box, Heading, Image, useColorModeValue, Button, Link, List, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear} from '../components/bio';
import Footer from '../components/footer';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoDiscord } from 'react-icons/io5';
import { AiOutlineMail } from "react-icons/ai";
import BuyMeACoffeeButton from '../components/buymeacoffee-button';
import Layout from '../components/layouts/article';
const Page = () => {
  
  return (
    <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}>
        Hello, I&apos;m a student at Purdue University!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tommaso Graewe
          </Heading>
          <p>Lab Technician / Boilermaker / Developer</p>
        </Box>
        <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}} 
          ml={{md: 6 }} 
          align='center'>
        <Image 
          borderColor="whiteAlpha.800" 
          borderWidth={2}
          maxWidth="100px" 
          display="inline-block" 
          boarderRadius="full" 
          src="/images/profile.png" 
          alt="Profile Image"/>
        </Box>
      </Box>
      <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Work
        </Heading>
        <Paragraph>Tommaso is a driven freelance web developer based in the Midwest, fueled by a passion for creating both digital and physical projects that pique his interests. Currently pursuing a degree in cybersecurity and network engineering at Purdue University, he also works as a lab technician in the computer and information technology department, further honing his technical skills. When not immersed in his studies or professional endeavors, Tommaso finds solace in the pages of a good book, often accompanied by a steaming cup of coffee. His diverse experiences and unwavering determination make him a versatile asset in the world of web development, capable of delivering innovative solutions tailored to each client's unique needs.</Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue">
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
        Bio
        </Heading>
        <BioSection>
        <BioYear>2002</BioYear>
        Born in Youngstown, Ohio.
        </BioSection>
        <BioSection>
        <BioYear>2009</BioYear>
        Moved to and grew up in the Columbus metropolitan area.
        </BioSection>
        <BioSection>
        <BioYear>2021</BioYear>
        Enrolled as an undergraduate cybersecurity student at Purdue University after high school.
        </BioSection>
        <BioSection>
        <BioYear>2023</BioYear>
        Studied abroad for the summer in Scandinavia, including a trip to Berlin, Germany.
        </BioSection>
        <BioSection>
        <BioYear>2024 to present</BioYear>
        Works as a freelance developer on the side.
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          I♥︎
        </Heading>
        <Paragraph> Playing Bass, Playing {' '}
          <Link href="https://www.fromsoftware.jp/ww/" target="_blank">
          FromSoftware
          </Link> games, Films, Books, {' '}
          <Link href="https://javahouse.com/" target="_blank">
          Coffee
          </Link>, {' '}
          <Link href="https://500px.com/p/tgraewe?view=photos" target="_blank">
            Photography
          </Link>
          </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Socials
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/tgraewe" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}>
                @tgraewe
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/tommaso-graewe/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoLinkedin/>}>
                @tommaso graewe
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/tommaso.graewe/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoInstagram />}>
                @tommaso.graewe
              </Button>
            </Link>
            </ListItem>
            <ListItem>
            <BuyMeACoffeeButton/>
          </ListItem>
        </List>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Say hello
        </Heading>
        <List>
        <ListItem>
            <Link href="mailto:tgraewe@proton.me" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<AiOutlineMail/>}
                >
                tgraewe@proton.me
              </Button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="https://discordapp.com/users/378336390188105739" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoDiscord/>}
                >
                @tommaso
              </Button>
            </Link>
            </ListItem>
            </List>
            </Section>
      <Footer></Footer>
    </Container> 
    </Layout>
  )
}
export default Page;