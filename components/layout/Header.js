import { Center, Flex } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"
import { nanoid } from 'nanoid';
import logo from "../../resources/images/woofurs-logo-v.svg"
import ContainerNavHeader from './ContainerNavHeader';
import ContainerNavHeaderResponsive from './ContainerNavHeaderResponsive';
import Link from 'next/link';


function Header() {

	const nav = [
		{
			id: nanoid(),
			url: '/#home',
			title: 'home',
		},
		{
			id: nanoid(),
			url: '/#why',
			title: 'why',
		},
		{
			id: nanoid(),
			url: '/#features',
			title: 'features',
		},
		{
			id: nanoid(),
			url: '/#business',
			title: 'For Businesses',
		},
		{
			id: nanoid(),
			url: '/#values',
			title: 'values',
		},
		{
			//*id: nanoid(),
			//*url: '/shop',
			//*title: 'shop',
			
		},
	]

	const phoneNumber = "+91 9686220260"

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
		>
			<Center>
				<Link href="/">
					<Image width="full" src={logo.src} alt={'woofurs logo'} title='Simplifying Pet Care with AI for Pet Owners and Businesses'/>
				</Link>
				
			</Center>
			<ContainerNavHeaderResponsive data={nav} phoneNumber={phoneNumber} />
			<ContainerNavHeader data={nav} phoneNumber={phoneNumber} />
		</Flex >
	);
}

export default Header;
