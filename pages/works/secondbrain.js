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
                A github repo integrated with Obsidian. 
                Used as a free solution to store markdown files online for compatibility.
                Auto syncs across devices every 5 minutes. Graphical view visualizes conected concepts when studying.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Applcation</Meta>
                        <Link href="https://obsidian.md/">
                        https://obsidian.md/
                        </Link>
                        
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Obsidian</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Obsidian Plugins / GitHub </span>
                    </ListItem>

                    <WorkImage src="/images/projects/secondbrain.png" alt="graph"></WorkImage>                   

                </List>
            </Container>
        </Layout>
    )
}

export default Work