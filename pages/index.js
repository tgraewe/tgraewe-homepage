import NextLink from 'next/link';
import { Container, Box, Heading, Image, useColorModeValue, Button, Link, List, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear} from '../components/bio';
import Footer from '../components/footer';
import { IoLogoGithub, IoLogoLinkedin, IoLink, IoLinkSharp } from 'react-icons/io5';
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
        Hello, I&apos;m an MS student studying Cyberinfrastructure @ Purdue 
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tom Graewe
          </Heading>
          <p>Grad Student / Teaching Assistant / Researcher</p>
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
        About me
      </Heading>
        <Paragraph>
          I am a graduate student at Purdue University pursuing a Master of Technology in Deception Engineering, with an expected graduation in Spring 2027. 
          I'm seeking entry-level full-time roles in network IT infrastructure or system administration.
        </Paragraph>
       <Paragraph> 
          My primary focus is on building and managing reliable networked systems. 
          I enjoy designing and deploying environments, then optimizing them to ensure they operate efficiently. 
          I value stability and performance first, followed by layering in security access controls to strengthen the system over time.
        </Paragraph>
        <Paragraph>
          I have hands-on experience working with Linux systems, network configurations, and network troubleshooting.
          I'm primarily interested in roles that allow me to work directly with systems and learn best practices for maintaining secure, dependable environments.
       </Paragraph>
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
        <BioYear>2021</BioYear>
        Enrolled as a Undergraduate at Purdue University
        </BioSection>
        <BioSection>
        <BioYear>2023</BioYear>
        Studied Abroad: Copenhagen, Stockholm, & Berlin        
        </BioSection>
        <BioSection>
        <BioYear>2024</BioYear>
        Interned over the summer, contributing to a datacenter renovation
        </BioSection>
        <BioSection>
        <BioYear>2025</BioYear>
        Graduated from Purdue University's Computer and Information Technology program
        </BioSection>
        <BioSection>
        <BioYear>2026</BioYear>
        Began honeynet research project
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Interests
        </Heading>
        <Paragraph> PC Building, Homelab tinkering, {' '}
          Film analysis, {' '}
          Coffee tasting, {' '} 
          Speedrunning games.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Let's Connect
        </Heading>
        <List>          
            <ListItem>
            <Link href="https://www.linkedin.com/in/tgraewe/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoLinkedin/>}>
                linkedin.com/in/tgraewe
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/tgraewe" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLogoGithub />}>
                github.com/tgraewe
              </Button>
            </Link>
          </ListItem>
        </List>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Contact me
        </Heading>
        <List>
        <ListItem>
            <Link href="mailto:tommaso.graewe@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<AiOutlineMail/>}
                >
                tommaso.graewe@gmail.com
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