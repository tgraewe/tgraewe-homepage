import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import inspireqr from '../public/images/projects/inspireqr/logo.png'
import datacenter from '../public/images/projects/datacenter/dc_03.jpg'
import ehp from '../public/images/projects/ehp_01.png'
import raspi from '../public/images/projects/raspi_01.png'
import computer from '../public/images/projects/pc.png'
import pideck from '../public/images/projects/pideck/pideck_01.png'
import ports from '../public/images/projects/ports/2.png'
import grandprix from '../public/images/projects/grandprix/1.jpeg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.4}>
            <WorkGridItem 
              id="grandprix" 
              title="Grand Prix" 
              thumbnail={grandprix}
            >
              Wireless Network for a Racetrack.
            </WorkGridItem>
          </Section>

          <Section delay={0.4}>
            <WorkGridItem 
              id="datacenter" 
              title="Datacenter" 
              thumbnail={datacenter}
            >
              Cyber Infrastructure Lab.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <WorkGridItem 
              id="ports" 
              title="Ports" 
              thumbnail={ports}
            >
              Recent website for portfolios.
            </WorkGridItem>
          </Section>
          
          <Section delay={0.4}>
            <WorkGridItem 
              id="pideck" 
              title="Cyberdeck" 
              thumbnail={pideck}
            >
              A small portable computer for future projects.
            </WorkGridItem>
          </Section>
          {/*
          <Section delay={0.4}>
            <WorkGridItem 
              id="homelab" 
              title="Homelab" 
              thumbnail={homelab}
            >
              Home Infrastructure Lab.
            </WorkGridItem>
          </Section>
          */}
          
          <Section delay={0.4}>
            <WorkGridItem 
              id="ehp" 
              title="Hacking website" 
              thumbnail={ehp}
            >
              Ethical Hackers of Purdue website.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />

        {/*<Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            
          </Section>
        </SimpleGrid>*/}

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/*
          <Section delay={0.4}>
            <WorkGridItem 
              id="oldsite" 
              title="Original Porfolio" 
              thumbnail={oldsite}
            >
              My first portfolio.
            </WorkGridItem>
          </Section>
          */}
          <Section delay={0.4}>
            <WorkGridItem 
              id="raspi" 
              title="PiHole" 
              thumbnail={raspi}
            >
              Raspberry Pi Home DNS/VPN Server.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem 
              id="computer" 
              title="Gaming PC" 
              thumbnail={computer}
            >
              A custom personal computer.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
              <WorkGridItem 
                id="inspireqr" 
                title="Inspire QR" 
                thumbnail={inspireqr}
              >
                An award winning website.
              </WorkGridItem>
            </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works