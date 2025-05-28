// components/sections/section4/Section4.js
import { Flex, Heading, Text, SimpleGrid, Box } from '@chakra-ui/layout';
import React from 'react';
import { nanoid } from "nanoid";
import DogIcon from '@icons/DogIcon';
import CatIcon from '@icons/CatIcon';
import BrushIcon from '@icons/SpaIcon';
import HouseDogIcon from '@icons/HouseDogIcon';
import TaxIcon from '@icons/TaxIcon';
import ServiceCard from './ServiceCard';

function Section4() {
    const services = [
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "Grooming",
            description: `Professional grooming services that make your pet look and feel their best`,
            color: "#FF9A73",
        },
        {
            id: nanoid(),
            url: "",
            icon: <HouseDogIcon />,
            title: "Boarding",
            description: `Safe, comfortable home-away-from-home when you're traveling`,
            color: "#7AC143",
        },
        {
            id: nanoid(),
            url: "",
            icon: <DogIcon />,
            title: "Veterinary",
            description: `At Home consultations and clinic appointments when you need them`,
            color: "#FFC833",
        },
        {
            id: nanoid(),
            url: "",
            icon: <CatIcon />,
            title: "Nutrition",
            description: `Customized diet plans and consultations with pet nutritionists`,
            color: "#ED6436",
        },
        {
            id: nanoid(),
            url: "",
            icon: <TaxIcon />,
            title: "Training",
            description: `Professional trainers for obedience, behavior, and specialty training`,
            color: "#82C55B",
        },
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'}/>,
            title: "Walking",
            description: `Reliable dog walkers with video and photo updates to keep your pet healthy`,
            color: "#FF9A73",
        },
    ];

    return (
        <Flex
            id="features"
            w="full"
            py="100px"
            px={['20px', '20px', '20px', '76px', '76px']}
            direction="column"
            alignItems="center"
            position="relative"
            overflow="hidden"
        >
            {/* Background decorative elements */}
            <Box
                position="absolute"
                top="-100px"
                right="-100px"
                width="300px"
                height="300px"
                bg="#FFC833"
                opacity="0.1"
                borderRadius="full"
                zIndex="0"
            />
            <Box
                position="absolute"
                bottom="-100px"
                left="-50px"
                width="200px"
                height="200px"
                bg="#7AC143"
                opacity="0.1"
                borderRadius="full"
                zIndex="0"
            />
            
            {/* Section Header */}
            <Flex 
                direction="column" 
                textAlign="center" 
                mb="60px" 
                maxW="800px"
                zIndex="1"
            >
                <Text 
                    textTransform="uppercase" 
                    color="#ED6436" 
                    fontWeight="700"
                    mb="3"
                    letterSpacing="1px"
                >
                    Our Services
                </Text>
                <Heading
                    fontSize={["40px", "40px", "56px", "56px", "56px"]}
                    fontWeight="700"
                    mb="6"
                >
                    Everything Your Pet Needs
                </Heading>
                <Text fontSize="20px" lineHeight="1.6">
                    From grooming to boarding, veterinary care to training - WigglyPet connects you with trusted professionals for all your pet care needs.
                </Text>
            </Flex>

            {/* Service Cards */}
            <SimpleGrid
                columns={[1, 1, 2, 3, 3]}
                spacing="30px"
                w="full"
                maxW="1200px"
                zIndex="1"
            >
                {
                    services.map((service) => (
                        <ServiceCard key={service.id} data={service} />
                    ))
                }
            </SimpleGrid>
        </Flex>
    );
}

export default Section4;