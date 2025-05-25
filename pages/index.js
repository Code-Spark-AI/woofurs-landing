// pages/index.js
import { Fragment } from "react";
import Head from 'next/head';
import Section1 from "@components/sections/section1/Section1";
import Section2 from "@components/sections/section2/Section2";
import Section3 from "@components/sections/section3/Section3";
import Section4 from "@components/sections/section4/Section4";
import Section5 from "@components/sections/section5/Section5";
import EnhancedCTASection from "@components/sections/cta/EnhancedCTASection";
import { LinkPreview } from "@components/ui/LinkPreview";
import logo from '../resources/images/wigglyPet.svg';

// Backup original sections in case you want to revert
// import Section1 from "@components/sections/section1/Section1";
// import Section2 from "@components/sections/section2/Section2";
// import Section3 from "@components/sections/section3/Section3";
// import Section4 from "@components/sections/section4/Section4";
// import Section5 from "@components/sections/section5/Section5";

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>WigglyPet | Every Paw Deserves the Best Care, Instantly</title>
				<meta name="description" content="WigglyPet connects you with verified pet care professionals in your neighborhood. Find groomers, vets, walkers, boarders, and more - all in one place." />
			</Head>

			{/*  Hero Section */}
			<Section1 />
			
			{/* Problem Statement Section */}
			<Section2 />
			
			{/* Features Solution Section */}
			<Section3 />
			
			{/* Services Section */}
			<Section4 />
			
			{/* Testimonials Section */}
			<Section5 />
			
			{/* CTA Section */}
			<EnhancedCTASection />
			
			{/* LinkPreview for social sharing */}
			<LinkPreview 
				title={'WigglyPet | Every Paw Deserves the Best Care, Instantly'} 
				imageUrl={logo} 
				description={'Connect with verified pet care professionals in your neighborhood. Find groomers, vets, walkers, boarders, and more - all in one place.'} 
			/>
		</Fragment>
	);
}