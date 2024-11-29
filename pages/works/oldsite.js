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
        <Layout title="Original Porfolio">
            <Container>
                <Title>
                    Original Porfolio <Badge>2023</Badge>
                </Title>
                <P>
                First portfolio website made. Offered basic web development features. Displayed my old resume and contact card. Pushed me to learn the React framework after to build more powerful websites.
                </P>
                <List ml={4} my={4}>
                   
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All browsers</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML / JS / CSS / GitHub / GitHub Pages / Cloudflare</span>
                    </ListItem>

                    <WorkImage src="/images/projects/oldsite.png" alt="about"></WorkImage>                   
                    <WorkImage src="/images/projects/oldsite_01.png" alt="resume"></WorkImage>                   
                    <WorkImage src="/images/projects/oldsite_02.png" alt="footer"></WorkImage>                   

                </List>
            </Container>
        </Layout>
    )
}

export default Work