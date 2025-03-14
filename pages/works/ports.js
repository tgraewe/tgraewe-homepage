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
        <Layout title="Ports">
            <Container>
                <Title>
                    Ports <Badge>2025</Badge>
                </Title>
                <P>
                Ports is a novel investment platform that simplifies portfolio management for all. It allows individuals to view unique portfolios created for various investment approaches, thereby enabling them to diversify their investments with minimal effort. The platform aims to be easily accessible, enabling individuals to invest with as low as $5, and provides features to monitor returns and risks across portfolios.

                You improved the user experience at the frontend in Ports. First, you made the landing page more attractive and easier to navigate, which acquires more new users. Second, you made the marketplace, in which people browse and select portfolios, cleaner and easier. Lastly, you made the leaderboard, which tracks the best portfolios, more engaging and helpful for the users.                
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://invest-ports.com">
                        https://invest-ports.com
                        </Link>
                        
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All browsers</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React / JS / tsParticles / GitHub </span>
                    </ListItem>


                    <WorkImage src="/images/projects/ports/2.png" alt="about"></WorkImage> 
                    <WorkImage src="/images/projects/ports/3.png" alt="about"></WorkImage>  
                    <WorkImage src="/images/projects/ports/1.png" alt="about"></WorkImage>  
                </List>
            </Container>
        </Layout>
    )
}

export default Work