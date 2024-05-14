import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import inspireqr from '../public/images/projects/inspire.png'
import ehp from '../public/images/projects/ehp.png'
import secondbrain from '../public/images/projects/secondbrain.png'
import raspi from '../public/images/projects/raspi.png'
import oldsite from '../public/images/projects/oldsite.png'
import minecraft from '../public/images/projects/minecraft.png'
import computer from '../public/images/projects/pc.png'
const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="inspireqr" 
                    title="Inspire-QR" 
                    thumbnail={inspireqr}>
                    An award-winning website project for mental health awareness on college campuses.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="ehp" 
                    title="Ethical Hacking website" 
                    thumbnail={ehp}>
                    Ethical Hackers of Purdue website.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="secondbrain" 
                    title="Second Brain" 
                    thumbnail={secondbrain}>
                    A second brain note-taking repository.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="raspi" 
                    title="Home DNS" 
                    thumbnail={raspi}>
                    Raspi home DNS/VPN server.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Divider my={6}/>

            <Heading as="h3" fontSize={20} mb={4}>
                Collaborations
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.4}>
                <p>First collab is incoming. Keep an eye out ;)</p>
                </Section>
            </SimpleGrid>
            <Divider my={6}/>

            <Heading as="h3" fontSize={20} mb={4}>
                Old
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="oldsite" 
                    title="Original Porfolio" 
                    thumbnail={oldsite}>
                    An original website made with no frameworks.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="minecraft" 
                    title="Game Server" 
                    thumbnail={minecraft}>
                    A vanilla, tweaked Minecraft game server.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="computer" 
                    title="Custom Computer" 
                    thumbnail={computer}>
                    A custom built gaming PC and workstation for a home lab.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            
        </Container>
    )
}

export default Works