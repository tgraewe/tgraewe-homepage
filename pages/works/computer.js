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
        <Layout title="Personal Computer">
            <Container>
                <Title>
                Custom PC <Badge>2019</Badge>
                </Title>
                <P>
                A custom PC built to support a my projects for managing my homelab or working remotely.              
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>OS</Meta>
                        <span>Windows 10</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Hardware</Meta>
                        <span>AMD Ryzen 5 2600X / AMD Radeon RX 590 / MSI B350 Tomahawk / Vengeance DDR4 24GB / Segotep 750W</span>
                    </ListItem>
                    <WorkImage src="/images/projects/pc.png" alt="computer"></WorkImage>                   
                    <WorkImage src="/images/projects/pc_01.png" alt="specs"></WorkImage>      

                </List>
            </Container>
        </Layout>
    )
}

export default Work