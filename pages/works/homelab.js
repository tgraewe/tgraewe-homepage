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
        <Layout title="Homelab">
            <Container>
                <Title>
                    Homelab <Badge>2024 - Present</Badge>
                </Title>
                <P>
                brew brew brew
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Location</Meta>
                        <span>Home</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Equipment</Meta>
                        <span>HP ProLiant G7 / Proxmox Virtual Environment / Raspberry Pi / TP-Link Wireless Routers / Network Cabling</span>
                    </ListItem>
                    <WorkImage src="/images/projects/minecraft.png" alt="about"></WorkImage>                                    
                </List>
            </Container>
        </Layout>
    )
}

export default Work