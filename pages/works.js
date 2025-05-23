import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import inspireqr from '../public/images/projects/inspireqr/logo.png'
import datacenter from '../public/images/projects/datacenter/dc_03.jpg'
import homelab from '../public/images/projects/homelab/diagram.png'
import ehp from '../public/images/projects/ehp_01.png'
import secondbrain from '../public/images/projects/secondbrain.png'
import raspi from '../public/images/projects/raspi_01.png'
import oldsite from '../public/images/projects/oldsite_01.png'
import minecraft from '../public/images/projects/minecraft_01.png'
import computer from '../public/images/projects/pc_01.png'
import pideck from '../public/images/projects/pideck/pideck_01.png'
import ports from '../public/images/projects/ports/2.png'
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
              id="ports" 
              title="Ports" 
              thumbnail={ports}
            >
              Recently sold website, for portfolios (ports).
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
              id="datacenter" 
              title="Datacenter" 
              thumbnail={datacenter}
            >
              Cyber Infrastructure Lab.
            </WorkGridItem>
          </Section>
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

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <Section delay={0.4}>
              <WorkGridItem 
                id="inspireqr" 
                title="Inspire-QR" 
                thumbnail={inspireqr}
              >
                An award winning project.
              </WorkGridItem>
            </Section>
          </Section>
        </SimpleGrid>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <WorkGridItem 
              id="oldsite" 
              title="Original Porfolio" 
              thumbnail={oldsite}
            >
              My first portfolio.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem 
              id="raspi" 
              title="Home DNS" 
              thumbnail={raspi}
            >
              Raspberry Pi DNS/VPN server.
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem 
              id="computer" 
              title="Custom PC" 
              thumbnail={computer}
            >
              A custom built computer.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works