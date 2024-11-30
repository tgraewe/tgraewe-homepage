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
        <Layout title="Datacenter">
            <Container>
                <Title>
                    Cyber Infrastructure Lab <Badge>2024</Badge>
                </Title>
                <P>
                Contributed the the reconstruction of the Purdue Computer and Information Tehcnology datacenter. 
                Involved 50miles of cable installed over the summer and 30k wires punched down between the labs.
                The end result is a versatile hands on learning environment for students to build cybersecurity and network engineering skills.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Experience</Meta>
                        <span>Network Engineering</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Equipment</Meta>
                        <span>Datacenter Infrastructure / Cisco Products / Keystone Jacks / Punchdown Tools</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Post</Meta>
                        <Link href='https://www.instagram.com/p/DCzD9Brx1KZ/'>This summer, our students were at the heart of major renovations in our Cyber Infrastructure lab.</Link>
                    </ListItem>

                    <WorkImage src="/images/projects/datacenter/dc_01.jpg" alt="about"></WorkImage>  
                    <WorkImage src="/images/projects/datacenter/dc_03.jpg" alt="about"></WorkImage>
                    <WorkImage src="/images/projects/datacenter/dc_04.jpg" alt="about"></WorkImage>
                    <WorkImage src="/images/projects/datacenter/dc_05.jpg" alt="about"></WorkImage>
                    <WorkImage src="/images/projects/datacenter/dc_06.jpg" alt="about"></WorkImage>
                    <WorkImage src="/images/projects/datacenter/dc_07.jpg" alt="about"></WorkImage>
                    <WorkImage src="/images/projects/datacenter/dc_08.jpg" alt="about"></WorkImage>            
                    <WorkImage src="/images/projects/datacenter/dc_09.jpg" alt="about"></WorkImage>                                                            
                </List>
            </Container>
        </Layout>
    )
}

export default Work