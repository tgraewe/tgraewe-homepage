import Link from 'next/link'
import Image from 'next/legacy/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const logoImg = `/images/logo-btap.png`

    return(
        <Link href="/">
            <LogoBox>
                    <Image src={logoImg} width={27} height={27} alt='logo' />
                    <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='M PLUS Rounded 1c'
                    fontWeight='bold'
                    ml='3'>
                    Tom Gräwe
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo;

