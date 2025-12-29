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
        Hello, I&apos;m an MS Student in Cyberinfrastructure and Network Engineering @ Purdue University 
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Tom Gräwe
          </Heading>
          <p>Network Engineer / Boilermaker / Graduate Teaching Assistant</p>
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
        <Paragraph>I’m a graduate student researching honeypot technology in the School of Applied Creative Computing (ACC). I am hoping to focus my thesis on production honeynets and am narrowing it down for my expected defense in Spring of 2027.
My motivation comes from finding ways to optimize resources on a project, whether it is an enterprise-grade network or a cloud-computing stack. My heart is in infrastructure, where I enjoy deploying, configuring, securing, and maintaining networks.
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
        <BioYear>2020</BioYear>
        Began Cisco Networking Academy
        </BioSection>
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
        Rebuilt Cyberinfrastructure Datacenter & Wireless Labs
        </BioSection>
        <BioSection>
        <BioYear>2025</BioYear>
        Graduated from Purdue University's Computer and Information Technology Program
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Interests
        </Heading>
        <Paragraph> Lifting, PC Building, {' '}
          <Link href="https://www.formula1.com/" target="_blank">
          F1
          </Link>, {' '}
          <Link href="https://www.fromsoftware.jp/ww/" target="_blank">
          FromSoftware games
          </Link>, Film, {' '}
          <Link href="https://bostonstoker.com/" target="_blank">
          Coffee
          </Link>, {' '} 
          Homelab tinkering.
          </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Let's Connect
        </Heading>
        <List>
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
            {/*<ListItem>
            <Link href="https://linktr.ee/tgraewe" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<IoLink />}>
                @linktr.ee/tgraewe
              </Button>
            </Link>
          </ListItem>*/}
            
        </List>
        </Section>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Contact me
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