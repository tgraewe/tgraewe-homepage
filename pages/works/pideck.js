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
        <Layout title="Cyber Deck">
            <Container>
                <Title>
                Cyber Deck <Badge>2024</Badge>
                </Title>
                <P>
                Basically a small portable computer.
                Building a Cyberdeck is all about giving you control over every piece that goes into your device. There are thousands of possible unique builds with cyberdecks depending on the owner. 
                Made for future projects and as an ethical hacking tool with many uses installed for wifi and hardware hacking.      
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Software/Tools</Meta>
                        <span>Raspberry Pi OS Lite / nmap / fping / metasploit </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Hardware</Meta>
                        <span>Raspberry Pi 3 Model B / 3.5 LCD Screen / Handheld Keyboard</span>
                    </ListItem>
                    <WorkImage src="/images/projects/pideck/pideck_01.png" alt="img1"></WorkImage>            
                    <WorkImage src="/images/projects/pideck/pideck_02.png" alt="img2"></WorkImage>                   
                    <WorkImage src="/images/projects/pideck/pideck_03.png" alt="img3"></WorkImage>                   

                </List>
            </Container>
        </Layout>
    )
}

export default Work