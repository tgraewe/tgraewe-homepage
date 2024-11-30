import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Game Server">
            <Container>
                <Title>
                    Game server <Badge>Ongoing</Badge>
                </Title>
                <P>
                A Minecraft server hosted on my home VM cluster. 
                Uses secure VPN tunnel for clients and global anycast network to avoid portscans.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Domain</Meta>
                        <Link href="t0matoes.playit.gg">t0matoes.playit.gg</Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Minecraft Java Edition</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java Development Kit / Ubuntu Server / PaperMC / Playit.gg</span>
                    </ListItem>
                    <WorkImage src="/images/projects/minecraft.png" alt="about"></WorkImage>                   
                    <WorkImage src="/images/projects/minecraft_01.png" alt="resume"></WorkImage>                   
                    <WorkImage src="/images/projects/minecraft_02.png" alt="footer"></WorkImage>                   
                </List>
            </Container>
        </Layout>
    )
}

export default Work