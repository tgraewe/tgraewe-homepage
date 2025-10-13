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
        <Layout title="Grand Prix">
            <Container>
                <Title>
                    Grand Prix <Badge>2025</Badge>
                </Title>
                <P>
                 This semester, I had the opportunity to volunteer for the Purdue Grand Prix while taking a course on wireless networks, where I got hands-on experience with setting up the network infrastructure for the event. It was a rewarding experience, and I’m proud of what our team accomplished!
                </P>
                <P>
                Since there was no WAN connection a high speed Point-to-Point Backhaul between the stadium and the track had to be implemented with a UniFi GigaBeam Plus. Thanks to these efforts, race teams and judges will have reliable internet access, and the event will be broadcast via our antenna setup.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Experience</Meta>
                        <span>Network Engineering / Site Surveying</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Equipment</Meta>
                        <span> Unifi Controller / UXG Lite APs / inSSIDer / Gigabit Ethernet Switch</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href='https://www.linkedin.com/posts/tgraewe_purduegrandprix-networking-teamwork-activity-7320593756892577792-dCLY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC-S1HoBGhdu6jhvfSDF3iPUWWrFgwWxVUc'>Linkedin</Link>
                    </ListItem>

                    <WorkImage src="/images/projects/grandprix/1.jpeg" alt="about"></WorkImage>
                    <WorkImage src="/images/projects/grandprix/2.jpeg" alt="about"></WorkImage>    
                    <WorkImage src="/images/projects/grandprix/3.jpeg" alt="about"></WorkImage>  
                    <WorkImage src="/images/projects/grandprix/4.jpeg" alt="about"></WorkImage>  
                    <WorkImage src="/images/projects/grandprix/5.jpeg" alt="about"></WorkImage>  
                    <WorkImage src="/images/projects/grandprix/6.jpeg" alt="about"></WorkImage>  
                    <WorkImage src="/images/projects/grandprix/7.jpeg" alt="about"></WorkImage>  
                                                                               
                </List>
            </Container>
        </Layout>
    )
}

export default Work