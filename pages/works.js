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
                    An award winning website project.
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
                    A note-taking repository.
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
{/* COMMENT 
            <Heading as="h3" fontSize={20} mb={4}>
                Collaborations
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.4}>
                <p>RSA key-generator is incoming. Keep an eye out ;)</p>
                </Section>
            </SimpleGrid>
            <Divider my={6}/>
*/}
            <Heading as="h3" fontSize={20} mb={4}>
                Old Projects
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="oldsite" 
                    title="Original Porfolio" 
                    thumbnail={oldsite}>
                    My first portfolio.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="minecraft" 
                    title="Game Server" 
                    thumbnail={minecraft}>
                    A minecraft game server.
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem 
                    id="computer" 
                    title="Custom PC" 
                    thumbnail={computer}>
                    A custom built PC.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            
        </Container>
    )
}

export default Works