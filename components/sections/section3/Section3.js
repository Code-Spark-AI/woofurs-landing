// components/sections/section3/Section3.js
import React from 'react';
import { Flex, Heading, Text, SimpleGrid, Box, Image } from '@chakra-ui/layout';
import { nanoid } from 'nanoid';
import AlarmClockIcon from '@icons/AlarmClockIcon';
import BallIcon from '@icons/BallIcon';
import DogIcon from '@icons/DogIcon';
import Bone2Icon from '@icons/Bone2Icon';
import CloudRightImage4 from '@components/clouds/CloudRightImage4';
import dogImage from '../../../resources/images/dog-swimming.jpg';

function Section3() {
    const features = [
        {
            id: nanoid(),
            title: "All-in-One Platform",
            icon: <Bone2Icon />,
            description: "Find groomers, boarders, walkers, vets, and stores in seconds - everything your pet needs in just a few taps.",
        },
        {
            id: nanoid(),
            title: "Digital Pet Profiles",
            icon: <BallIcon colorFill={'#7AC143'} />,
            description: "Keep all health records, vaccination history, and pet details in one place - never lose important information again.",
        },
        {
            id: nanoid(),
            title: "Verified Professionals",
            icon: <DogIcon />,
            description: "Every service provider undergoes rigorous background checks and skill verification - trust who cares for your pet.",
        },
        {
            id: nanoid(),
            title: "Real-Time Updates",
            icon: <AlarmClockIcon />,
            description: "Track services in real-time and communicate directly with providers - stay connected to your pet's care.",
        },
    ];

    return (
        <Flex
            w="full"
            pt="80px"
            pb="100px"
            mt={["40px", "40px", "40px", "30px", "30px"]}
            direction="column"
            className="scroll-mt enhanced-features-section"
            alignItems="center"
            position="relative"
            overflow="hidden"
            bg="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(249,249,249,1) 100%)"
        >
            {/* Background decorative elements */}
            <Box
                position="absolute"
                top="-50px"
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
                px={["20px", "20px", "20px", "0", "0"]}
            >
                <Text 
                    textTransform="uppercase" 
                    color="#ED6436" 
                    fontWeight="700"
                    mb="3"
                    letterSpacing="1px"
                >
                    The Solution
                </Text>
                <Heading
                    fontSize={["40px", "40px", "56px", "56px", "56px"]}
                    fontWeight="700"
                    mb="6"
                >
                    One App for <Text as="span" color="#ED6436">All Your Pet Care Needs</Text>
                </Heading>
                <Text fontSize="20px" lineHeight="1.6">
                    WigglyPet brings together everything you need to take care of your pet in one simple, convenient platform.
                </Text>
            </Flex>
            
            {/* Two-column layout for features and app image */}
            <Flex
                direction={["column", "column", "column", "row", "row"]}
                alignItems="center"
                justifyContent="space-between"
                w="full"
                maxW="1200px"
                px={["20px", "20px", "20px", "76px", "76px"]}
                zIndex="1"
            >
                {/* Features */}
                <Flex 
                    direction="column" 
                    maxW={["100%", "100%", "100%", "50%", "50%"]}
                    pr={[0, 0, 0, "40px", "40px"]}
                    mb={["40px", "40px", "40px", 0, 0]}
                >
                    <SimpleGrid columns={[1, 1, 2, 2, 2]} spacing="30px">
                        {features.map(feature => (
                            <Box
                                key={feature.id}
                                bg="white"
                                p="6"
                                borderRadius="xl"
                                boxShadow="md"
                                _hover={{
                                    transform: "translateY(-10px)",
                                    boxShadow: "xl",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                <Flex 
                                    w="50px" 
                                    h="50px" 
                                    color="#ED6436" 
                                    mb="4"
                                >
                                    {feature.icon}
                                </Flex>
                                <Text 
                                    fontSize="20px" 
                                    fontWeight="700" 
                                    mb="3"
                                    color="#333"
                                >
                                    {feature.title}
                                </Text>
                                <Text lineHeight="1.6" color="#555">
                                    {feature.description}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Flex>
                
                {/* Image */}
                <Flex 
                    w={["100%", "100%", "100%", "50%", "50%"]} 
                    justifyContent="center"
                    position="relative"
                >
                    <Box 
                        w="full" 
                        maxW="500px"
                        className="app-preview-animation"
                    >
                        <CloudRightImage4
                            id={'app-preview-image'}
                            url={dogImage.src}
                            sizeW={'120%'}
                            sizeH={'140%'}
                            x={'-120'}
                            y={'0'}
                        />
                        
                        {/* App UI overlay - this is just a decorative element to suggest a mobile app */}
                        <Box
                            position="absolute"
                            top="10%"
                            left="10%"
                            width="80%"
                            height="80%"
                            borderRadius="20px"
                            border="10px solid white"
                            boxShadow="lg"
                            bg="rgba(255,255,255,0.2)"
                            backdropFilter="blur(5px)"
                            zIndex="2"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Section3;