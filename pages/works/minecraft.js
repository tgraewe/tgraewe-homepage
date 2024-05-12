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
                    Game Server <Badge>2022 - 2023</Badge>
                </Title>
                <P>
                A Minecraft server hosted on my home infrastructure.
                Supports quality-of-life features for players including a website with a live world map and more achievements to complete.
                Added layers of security to the network and system for the users and infrastructure, 
                to avoid port scans from overseas or unwelcomed clients.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Minecraft Java Edition</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java Development Kit (JDK)/HP ProLiant hardware/RAID hardware/Ubuntu Server/Cloudflare Domain Name System (DNS)</span>
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