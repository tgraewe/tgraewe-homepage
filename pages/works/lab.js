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
        <Layout title="Wireless Security Lab">
            <Container>
                <Title>
                    Wireless Security Lab <Badge>2026</Badge>
                </Title>
                <P>
                
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Experience</Meta>
                        <span>Network Design</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Equipment</Meta>
                        <span></span>
                    </ListItem>
                    <ListItem>
                        <Meta>Software</Meta>
                        <span></span>
                    </ListItem>
                    <WorkImage src="/images/projects/lab/lab.jpg" alt="about"></WorkImage>                                    
                </List>
            </Container>
        </Layout>
    )
}

export default Work