// components/layout/BusinessHeader.js
import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import logo from "../../resources/images/wigglyPet.svg"
import Link from 'next/link';
import Btn from '@components/Btn';
import BusinessNavHeaderResponsive from './BusinessNavHeaderResponsive';

function BusinessHeader() {
  const nav = [
    {
      id: nanoid(),
      url: '/business#who-can-join',
      title: 'Who Can Join',
    },
    {
      id: nanoid(),
      url: '/business#why-partner',
      title: 'Benefits',
    },
    {
      id: nanoid(),
      url: '/business#features',
      title: 'Features',
    },
    {
      id: nanoid(),
      url: '/business#testimonial',
      title: 'Testimonials',
    },
  ]

  return (
    <Flex
      as="header"
      w={'full'}
      h="80px"
      px={['16px', '16px', '16px', '78px', '78px']}
      justifyContent='space-between'
      position="fixed"
      bgColor="white"
      zIndex="24"
      boxShadow="0 2px 10px rgba(0,0,0,0.05)"
    >
      <Center>
        <Link href="/">
          <Image width="full" src={logo.src} alt={'wigglypet logo'} title='Every Paw Deserves the Best Care, Instantly'/>
        </Link>
      </Center>
      <BusinessNavHeaderResponsive data={nav} />
      <Center gridGap="44px" display={['none', 'none', 'none', 'flex', 'flex']} >
        {
          nav.map(e => (
            <Link key={e.id} href={e.url}>
              <Flex
                as="a"
                position="relative"
                alignItems="center"
                h="full"
                alignSelf="center"
                textTransform="capitalize"
                fontWeight="700"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "100%",
                  backgroundColor: "#ed6436",
                  width: "100%",
                  height: "2px",
                  transform: "scaleX(0)",
                  transition: "all .3s ease"
                }}
                _hover={{
                  _before: {
                    transform: "scaleX(1)"
                  },
                  color: "#ed6436",
                  textDecoration: "none",
                }}
                _focus={{
                  _before: {
                    transform: "scaleX(1)"
                  },
                  color: "#ed6436",
                  textDecoration: "none",
                  boxShadow: "none"
                }}
              >
                {e.title}
              </Flex>
            </Link>
          ))
        }
        <Link href="https://forms.gle/SAXr25vQpbdMjjxs9" target="_blank">
          <Btn
            title="Join Now"
            borderTopStartRadius={'none'}
            change={false}
            colorHover={'white'}
            color={'black'}
            width={'140px'}
            fw={'700'}
            className="cta-button"
          />
        </Link>
      </Center>
    </Flex >
  );
}

export default BusinessHeader;