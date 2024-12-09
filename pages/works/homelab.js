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
                My home network setup features multiple segments built around a 5-port Gigabit Layer 2 switch at its heart. I've divided the network into two main parts: a wireless LAN running on 192.168.1.0/24 and a private LAN on 10.0.0.0/24. For internet access, I use a modem/wireless router that links to my ISP. To ensure solid WiFi coverage throughout my space, I implemented a bridged point-to-point setup using two routers - an OpenWRT router (ap1-hoosier.home) and a TP-Link router (ap2-hoosier.home).
                </P>
                <P>
                I've connected several essential systems to my Layer 2 switch, including my Windows 10 management workstation (mgmt.hoosier.home), a Proxmox virtualization cluster (cluster.hoosier.home), a local nameserver (ns.hoosier.home). Within my Proxmox cluster, I run an Ubuntu Server (mc.hoosier.home) as a virtual machine, allowing me to efficiently manage and deploy services as needed.
                </P>
                <P>This homelab has been invaluable for hands-on learning experience, giving me a environment to experiment with various networking concepts and tools. The lab has repeatedly proven itself as an excellent platform for troubleshooting and problem-solving, helping me develop practical skills that directly translate to professional IT scenarios.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Experience</Meta>
                        <span>Network Administration/Architecture</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Equipment</Meta>
                        <span>HP ProLiant G7 / Raspberry Pi / TP-Link Wireless Routers / TP-Link 5 Port Switch / Network Cabling</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Software</Meta>
                        <span>Proxmox Virtual Environment / Ubuntu Server / Raspberry Pi OS Lite / OpenWRT / TP-Link Firmware</span>
                    </ListItem>
                    <WorkImage src="/images/projects/homelab/diagram.png" alt="about"></WorkImage>                                    
                </List>
            </Container>
        </Layout>
    )
}

export default Work