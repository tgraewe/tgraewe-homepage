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
                    Original Porfolio <Badge>2022 - 2024</Badge>
                </Title>
                <P>
                First portfolio website, second web application project completed, engaged to learn more about frontend engineering. Was able to implement some basic yet cool projects within the original website including my original portfolio. Had weaknesses such as utilizing a single page rather than multiple, or being incompatible with mobile. Pushed me to learn the React framework to develop more powerful dynamic websites.                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://tommaso-graewe.dev">
                        https://tommaso-graewe.dev
                        </Link>
                        
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All browsers</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML/JS/CSS/GitHub/GitHub Pages/Cloudflare</span>
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