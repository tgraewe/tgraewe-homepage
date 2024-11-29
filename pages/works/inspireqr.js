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
        <Layout title="Inspire-QR Web App">
            <Container>
                <Title>
                    Inspire-QR <Badge>2022</Badge>
                </Title>
                <P>
                An award-winning class project of the Moonshot pitch competition. 
                The website is linked to a QR code placed around campus while providing motivational quotes. 
                The goal was to promote the mental health and well-being of our hardworking boilermakers. 
                For this project, I learned HTML/CSS to put together a website and design the brand logo.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://tgraewe.github.io/InspireQR/">
                        https://tgraewe.github.io/InspireQR/
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All Browsers</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML / JS / CSS / GitHub</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Press Release</Meta>
                        <Link href="https://polytechnic.purdue.edu/newsroom/design-innovation-students-shine-moonshot-competitions">
                        Design & Innovation Students shine in Moonshot Competitions
                        </Link>                    
                    </ListItem>

                    <WorkImage src="/images/projects/inspire.png" alt="inspireqr"></WorkImage>                   
                    <WorkImage src="/images/projects/inspire_01.png" alt="resources"></WorkImage>                   

                </List>
            </Container>
        </Layout>
    )
}

export default Work