// components/sections/section5/Section5.js
import React from 'react';
import { Flex, Heading, Text, Box, SimpleGrid } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/react';
import CloudLeftImage1 from '@components/clouds/CloudLeftImage1';
import QuoteRightIcon from '@icons/QuoteRightIcon';
import lexi from '../../../resources/images/lexi-dog.jpg';
import { nanoid } from 'nanoid';

function Section5() {
    const testimonials = [
        {
            id: nanoid(),
            quote: "Managing my fur baby's care is so much easier now. From scheduling grooming appointments to finding a reliable dog walker, everything is just a tap away!",
            name: "Priya K.",
            location: "Koramangala, Bangalore",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            rating: 5
        },
        {
            id: nanoid(),
            quote: "As a busy professional, WigglyPet has been a lifesaver. The digital health records feature is a game-changer for keeping track of my pet's vaccinations.",
            name: "Rahul M.",
            location: "HSR Layout, Bangalore",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            rating: 5
        },
        {
            id: nanoid(),
            quote: "Finding reliable pet sitters was always a challenge until I discovered WigglyPet. Now I can travel with peace of mind knowing my cats are in good hands.",
            name: "Sneha T.",
            location: "Indiranagar, Bangalore",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            rating: 5
        }
    ];

    return (
        <Flex
            className="scroll-mt-11 enhanced-testimonials"
            id="reviews"
            w="full"
            mt={["60px", "60px", "60px", "60px", "60px"]}
            py="80px"
            px={["20px", "20px", "20px", "76px", "76px"]}
            direction="column"
            alignItems="center"
            position="relative"
            overflow="hidden"
            bg="#f9f9f9"
        >
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
                    Testimonials
                </Text>
                <Heading
                    fontSize={["40px", "40px", "56px", "56px", "56px"]}
                    fontWeight="700"
                    mb="6"
                >
                    What Pet Parents Say
                </Heading>
                <Text fontSize="20px" lineHeight="1.6">
                    Discover why pet parents across Bangalore trust WigglyPet for all their pet care needs.
                </Text>
            </Flex>
            
            {/* Testimonial cards */}
            <SimpleGrid 
                columns={[1, 1, 1, 3, 3]} 
                spacing="30px"
                maxW="1200px"
                zIndex="1"
            >
                {testimonials.map((testimonial) => (
                    <Box
                        key={testimonial.id}
                        bg="white"
                        borderRadius="xl"
                        p="6"
                        boxShadow="md"
                        position="relative"
                        _hover={{
                            transform: "translateY(-10px)",
                            boxShadow: "xl",
                            transition: "all 0.3s ease"
                        }}
                    >
                        {/* Quote icon */}
                        <Box
                            position="absolute"
                            top="-20px"
                            left="20px"
                            color="#ED6436"
                            opacity="0.2"
                            width="40px"
                            height="40px"
                        >
                            <QuoteRightIcon />
                        </Box>
                        
                        {/* Rating stars */}
                        <Flex mb="4">
                            {[...Array(5)].map((_, i) => (
                                <Box key={i} color="#FFC833" mr="1">★</Box>
                            ))}
                        </Flex>
                        
                        {/* Testimonial quote */}
                        <Text
                            fontSize="18px"
                            fontWeight="500"
                            lineHeight="1.6"
                            mb="6"
                            fontStyle="italic"
                            color="#555"
                        >
                            {`"${testimonial.quote}"`}
                        </Text>
                        
                        {/* Customer info */}
                        <Flex alignItems="center">
                            <Avatar 
                                src={testimonial.avatar} 
                                name={testimonial.name} 
                                size="md" 
                                mr="3"
                            />
                            <Flex direction="column">
                                <Text fontWeight="700" color="#333">
                                    {testimonial.name}
                                </Text>
                                <Text fontSize="sm" color="#777">
                                    {testimonial.location}
                                </Text>
                            </Flex>
                        </Flex>
                    </Box>
                ))}
            </SimpleGrid>
            
            {/* Background image */}
            <Box
                position="absolute"
                bottom="-100px"
                right="-100px"
                w="400px"
                h="400px"
                opacity="0.1"
                zIndex="0"
            >
                <CloudLeftImage1
                    url={lexi.src}
                    x={'-280'}
                    y={'-240'}
                    sizeW={'120%'}
                    sizeH={'140%'}
                    id={'lexi-dog-bg'}
                />
            </Box>
        </Flex>
    );
}

export default Section5;