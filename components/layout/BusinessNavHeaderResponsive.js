// components/layout/BusinessNavHeaderResponsive.js
import React, { useState } from 'react';
import { Image } from '@chakra-ui/image';
import { Box, Center, Flex, Stack, Text } from '@chakra-ui/layout';
import MenuIcon from '@icons/MenuIcon';
import XIcon from '@icons/XIcon';
import NavHeader from '@components/NavHeader';
import logo from '../../resources/images/wigglyPet.svg'
import ContainerSocialNetworks from '@components/social_networks/ContainerSocialNetworks';
import Facebook from '@components/social_networks/Facebook';
import Instagram from '@components/social_networks/Instagram';
import Linkedin from '@components/social_networks/Linkedin';
import { nanoid } from 'nanoid';
import Link from 'next/link';

function BusinessNavHeaderResponsive({ data }) {
    const [isOpen, setisOpen] = useState(false)
    const [sizeRight, setSizeRight] = useState(0)

    function setOpen() {
        setisOpen(true)
    }

    function setClose() {
        setisOpen(false)
    }

    function handleClick() {
        if (isOpen) {
            setSizeRight(1000)

            setTimeout(() => {
                setClose()
            }, 400);

        } else {
            setSizeRight(0)

            setOpen()

        }
    }

    const socialNetworks = [
        {
            id: nanoid(),
            socialNetwork: 'Instagram',
            iconSvg: <Instagram />,
            url: 'https://www.instagram.com/bellyrubclub_woofurs/',
        },
        {
            id: nanoid(),
            socialNetwork: 'Linkedin',
            iconSvg: <Linkedin />,
            url: 'https://www.linkedin.com/company/wigglypet',
        }
    ]

    return (
        <Center
            display={['flex', 'flex', 'flex', 'none', 'none']}
            alignItems="center"
            alignSelf="center"
        >
            <Box onClick={handleClick} cursor="pointer" h="40px" w="40px" _hover={{
                color: '#ED6436',
            }}>
                <MenuIcon />
            </Box>

            {
                isOpen && <Stack
                    className="animate__animated animate__fadeInRightBig"
                    position="absolute"
                    overflow="auto"
                    h="100vh"
                    zIndex="44"
                    left={`${sizeRight}px`}
                    transition="all 1s ease"
                    right="0" bottom="0"
                    top="0"
                    bgColor="#ED6436"
                    color="white"
                    justifyContent="flex-start"
                    alignItems="center"
                    pt={['24%', '6%', '6%', '24%', '24%']}
                    pb={['24%', '6%', '6%', '24%', '24%']}
                    
                >
                    <Box position="absolute" w="38px" h="38px" right="39px" top="35px" onClick={handleClick} title="Close">
                        <XIcon />
                    </Box>

                    <Image
                        src={logo.src}
                        w="196px"
                    />

                    <Stack pt="40px" fontSize="26px" gridGap="20px">
                        {
                            data.map(e => (
                                <Link href={e.url} key={e.id} onClick={handleClick}>
                                    <Flex
                                        as="a"
                                        position="relative"
                                        alignItems="center"
                                        h={'50px'}
                                        alignSelf="center"
                                        textTransform="capitalize"
                                        fontWeight="700"
                                        color="white"
                                    >
                                        {e.title}
                                    </Flex>
                                </Link>
                            ))
                        }
                        <Link href="https://forms.gle/SAXr25vQpbdMjjxs9" target="_blank">
                            <Flex
                                as="a"
                                position="relative"
                                alignItems="center"
                                h={'50px'}
                                alignSelf="center"
                                textTransform="capitalize"
                                fontWeight="700"
                                color="white"
                                borderWidth="2px"
                                borderColor="white"
                                borderRadius="full"
                                px="4"
                            >
                                Join Now
                            </Flex>
                        </Link>
                        <ContainerSocialNetworks data={socialNetworks} mtSize={'29px !important'} gap={'14px'} revert={true} />
                    </Stack>

                </Stack>
            }

        </Center>
    );
}

export default BusinessNavHeaderResponsive;