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
        <Layout title="Home DNS">
            <Container>
                <Title>
                    Raspberry Pi <Badge>2022 - 2024</Badge>
                </Title>
                <P>
                Raspberry Pi is configured to be a home DNS server with Pi-Hole installed. 
                The goal was to create a home domain to monitor network traffic and queries locally and remotely. 
                Includes a Pi-VPN installation acting as a secure tunnel home to maintain network traffic 
                and provide remote access to machines in the private network from the public.
                It was a good beginner project.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Raspberry Pi 3 Model B</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Software</Meta>
                        <span>Raspberry Pi OS Lite / Pi-hole / PiVPN</span>
                    </ListItem>
                    <WorkImage src="/images/projects/raspi_01.png" alt="raspi"></WorkImage>                   
                    <WorkImage src="/images/projects/raspi.png" alt="dashboard"></WorkImage>                   
                </List>
            </Container>
        </Layout>
    )
}

export default Work