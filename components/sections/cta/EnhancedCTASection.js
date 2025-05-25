// components/sections/cta/EnhancedCTASection.js
import React from 'react';
import { Flex, Heading, Text, Box, HStack, VStack } from '@chakra-ui/react';
import BoneIcon from '@icons/BoneIcon';
import bgImage from '../../../resources/images/image-background-h.jpg';
import Link from 'next/link';
import StarIcon from '@icons/StarIcon';
import BallIcon from '@icons/BallIcon';
import DogIcon from '@icons/DogIcon';

function EnhancedCTASection() {
  const benefits = [
    {
      icon: <DogIcon />,
      text: "Book vetted pet care services in seconds"
    },
    {
      icon: <BallIcon colorFill={"#7AC143"} />,
      text: "Track your pet's care in real-time"
    },
    {
      icon: <StarIcon color={"#FFC833"} />,
      text: "Ensure your pet gets the best care possible"
    }
  ];

  return (
    <Flex
      w="full"
      py="80px"
      direction="column"
      alignItems="center"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(135deg, #FFC833 0%, #ED6436 100%)"
      color="white"
      mt="60px"
    >
      {/* White paw print patterns in background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        zIndex="0"
        backgroundImage="url('https://www.transparenttextures.com/patterns/dog-pawprints.png')"
      />
      
      {/* Content */}
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        maxW="1200px"
        px={["20px", "20px", "20px", "76px", "76px"]}
        zIndex="1"
      >
        <Heading
          fontSize={["40px", "40px", "60px", "60px", "60px"]}
          fontWeight="800"
          mb="6"
          lineHeight="1.1"
        >
          Your Pet Deserves<br />the Best Care
        </Heading>
        
        <Text 
          fontSize="22px" 
          maxW="800px" 
          mb="10"
          fontWeight="500"
        >
          WigglyPet connects you with verified pet care professionals in your neighborhood.
        </Text>
        
        {/* Benefits */}
        <HStack 
          spacing={["20px", "20px", "40px", "60px", "60px"]} 
          mb="16"
          flexDirection={["column", "column", "row", "row", "row"]}
        >
          {benefits.map((benefit, index) => (
            <VStack key={index} spacing="3">
              <Box 
                w="60px" 
                h="60px" 
                borderRadius="full" 
                bg="white" 
                color="#ED6436"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {benefit.icon}
              </Box>
              <Text fontWeight="500" fontSize="18px">
                {benefit.text}
              </Text>
            </VStack>
          ))}
        </HStack>
        
        {/* App coming soon badge */}
        <Box 
          bg="white" 
          color="#333"
          px="6" 
          py="2" 
          borderRadius="full"
          fontWeight="600"
          mb="8"
        >
          🚀 Mobile App Launching Soon
        </Box>
        
        {/* CTA Button */}
        <Link href="#features">
          <Flex
            w="260px"
            cursor="pointer"
            transition="transform .3s ease"
            position="relative"
            justifyContent="center"
            _hover={{
              transform: "translateY(-5px)",
            }}
            className="cta-button"
          >
            <Flex
              w="100%"
              h="100%"
            >
              <BoneIcon
                url={bgImage.src}
                x={"-110"}
                y={"0"}
                sizeW={"200%"}
                sizeH={"100%"}
                id={"cta-bone-main"}
              />
            </Flex>
            <Text
              as="strong"
              color="white"
              fontSize="18px"
              top="39%"
              left="17%"
              transform="rotate(-5.8deg)"
              position="absolute"
              textTransform="uppercase"
              userSelect="none"
            >
              Get Started Today
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}

export default EnhancedCTASection;