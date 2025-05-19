import {useState, useEffect} from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@components/layout/Layout"
import BusinessLayout from "@components/layout/BusinessLayout"
import theme from "@components/Theme"
import '../styles/globals.css'
import '../styles/animations.css'
import '../styles/business.css'
import 'animate.css';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
	const [hydrated,setHydrated] = useState(false)
	const router = useRouter()

	useEffect(()=>{
		setHydrated(true)
	}, [])

	// Use BusinessLayout for the business page, default Layout for all other pages
	const getLayout = () => {
		if (router.pathname === '/business') {
			return BusinessLayout
		}
		return Layout
	}

	const AppLayout = getLayout()
	
	return hydrated && (
		<ChakraProvider theme={theme} >
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ChakraProvider>
	)
}
export default MyApp