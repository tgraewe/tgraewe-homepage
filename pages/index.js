import NextLink from 'next/link';
import { Container, Box, Heading, Image, useColorModeValue, Button, Link, List, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear} from '../components/bio';
import Footer from '../components/footer';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLink, IoLinkSharp } from 'react-icons/io5';
import { AiOutlineMail } from "react-icons/ai";
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
          <p>Boilermaker / Blue Teamer / Freelance Developer</p>
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
        <Paragraph>I'm an invigorated developer and rising professional from Columbus, Ohio. Currently, I'm also pursuing two degrees in Cybersecurity and Network Engineering at Purdue University with a minor in Sociology. I enjoy new experiences in my job environments and leaving an impact on the people I connect with as well as learning from them, their experiences, and their personal lives. I'm always looking to pick up new skills for positions to adapt swiftly and am satisfied only by refined quality work. In my free time, you'll find me reading a book of interest and enjoying a coffee. My determination comes from my feelings when I complete a goal which was challenging when I started, yet more rewarding in experience when completed. I'm fully confident and capable of delivering innovative solutions tailored to each client's unique needs.</Paragraph>
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
        Grew up in the Columbus metropolitan area.
        </BioSection>
        <BioSection>
        <BioYear>2021</BioYear>
        Enrolled as a Cybersecurity student at Purdue University.
        </BioSection>
        <BioSection>
        <BioYear>2023</BioYear>
        Studied abroad for the summer in Copenhagen, Stockholm, and a tour to Berlin.
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
        <Paragraph> Playing Bass, {' '}
          <Link href="https://www.formula1.com/" target="_blank">
          F1
          </Link>, {' '}
          <Link href="https://www.fromsoftware.jp/ww/" target="_blank">
          FromSoftware
          </Link> games, Reading, {' '}
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
            <Link href="https://www.linkedin.com/in/tgraewe/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoLinkedin/>}>
                @linkedin.com/in/tgraewe/
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/tommas.me/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoInstagram />}>
                @tommas.me
              </Button>
            </Link>
            </ListItem>
            <ListItem>
            <Link href="https://linktr.ee/tgraewe" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLink />}>
                @linktr.ee/tgraewe
              </Button>
            </Link>
          </ListItem>
            
        </List>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Say hello 👋
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
            </List>
            </Section>
      <Footer></Footer>
    </Container> 
    </Layout>
  )
}
export default Page;