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
                Personal Computer <Badge>2019</Badge>
                </Title>
                <P>
                A custom desktop assembled to support a home lab office/workstation, serving as the central hub. Meticulously designed for multitasking, virtualization, and high-performance computing. Carefully selected components offer tailored, unparalleled performance for a home lab's unique demands. Provides robust muscle for development, research, and innovation.                
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows 10/</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Computer engineering/Home Infrastructure/Software development/Oracle VM VirtualBox/Hardware (repairs/maintenance)</span>
                    </ListItem>
                    <WorkImage src="/images/projects/pc.png" alt="computer"></WorkImage>                   
                    <WorkImage src="/images/projects/pc_01.png" alt="specs"></WorkImage>      
                    <WorkImage src="/images/projects/pc_02.png" alt="specs"></WorkImage>                   

                </List>
            </Container>
        </Layout>
    )
}

export default Work