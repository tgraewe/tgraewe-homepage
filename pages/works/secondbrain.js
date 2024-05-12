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
        <Layout title="Second Brain">
            <Container>
                <Title>
                    Second Brain <Badge>2023</Badge>
                </Title>
                <P>
                A personal database was constructed using Obsidian and GitHub. 
                Used to store class notes and connect the concepts for review during exam season. 
                The goal of this project was to centralize all of my notes on one platform to be accessed from my personal computers. 
                The GitHub repository automatically synchronizes across my devices every 5 minutes to maintain backups and accessibility.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Obsidian</Meta>
                        <Link href="https://obsidian.md/">
                        https://obsidian.md/
                        </Link>
                        
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Obsidian/Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Obsidian/Git/Community pluggins</span>
                    </ListItem>

                    <WorkImage src="/images/projects/secondbrain.png" alt="graph"></WorkImage>                   

                </List>
            </Container>
        </Layout>
    )
}

export default Work