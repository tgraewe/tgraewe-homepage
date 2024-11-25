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
        <Layout title="Ethical Hackers of Purdue">
            <Container>
                <Title>
                    Ethical Hackers of Purdue Website <Badge>2024</Badge>
                </Title>
                <P>
                As a proud member of Ethical Hackers of Purdue, 
                I  recently assumed the role of Webmaster within the club. In this capacity, my respon
                sibilities entail maintaining and enhancing the organization's website while furthering its
                expertise in front-end development.
                </P>                
                 <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ehp.rocks">
                        https://ehp.rocks
                        </Link>
                        
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>All browsers</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React / React JS / GitHub / Namecheap / Google Cloud</span>
                    </ListItem>

                    <WorkImage src="/images/projects/ehp_01.png" alt="ehp"></WorkImage>
                    <WorkImage src="/images/projects/ehp_02.png" alt="calendar"></WorkImage>
                    <WorkImage src="/images/projects/ehp_03.png" alt="footer"></WorkImage>

                </List>
            </Container>
        </Layout>
    )
}

export default Work