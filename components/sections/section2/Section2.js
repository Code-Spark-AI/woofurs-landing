// components/sections/section2/Section2.js
import React from "react";
import { Flex, Heading, Text, Box, SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import StarIcon from "@icons/StarIcon";
import CloudLeftImage1 from "@components/clouds/CloudLeftImage1";
import branch from "../../../resources/images/branch.png";
import foodForDog from "../../../resources/images/dog-food.png";
import ballForDog from "../../../resources/images/orange-ball.png";

function Section2() {
  const challenges = [
    {
      text: "Spending hours finding reliable pet services",
      icon: <StarIcon color="#ED6436" />
    },
    {
      text: "Managing multiple contacts for different needs",
      icon: <StarIcon color="#ED6436" />
    },
    {
      text: "Worrying about your pet's safety with unknown providers",
      icon: <StarIcon color="#ED6436" />
    },
    {
      text: "Keeping track of health records across various clinics",
      icon: <StarIcon color="#ED6436" />
    }
  ];

  return (
    <Flex
      w="full"
      id="solution"
      className="scroll-mt enhanced-solution-section"
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
        "row",
      ]}
      mt={["40px", "40px", "40px", "40px", "40px"]}
      py="60px"
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="20%"
        right="-50px"
        width="200px"
        height="200px"
        bg="#FFC833"
        opacity="0.15"
        borderRadius="full"
        zIndex="0"
      />
      
      {/* Left side - illustration */}
      <Flex
        w={['100%', '100%', '100%', '100%', '100%']}
        position="relative"
        mt={['40px', '40px', '40px', '0px', '0px']}
        className="solution-image"
        zIndex="1"
      >
        <CloudLeftImage1
          id={'bg-yellow-32asq211'}
          fill="#FFC833"
          x={'0'}
          y={'-400'}
          sizeW={'120%'}
          sizeH={'120%'}
        />
        <Image
          animation='move 15s infinite linear'
          position="absolute"
          objectFit="cover"
          bottom="20%"
          right="20%"
          w={['200px', '200px', '300px', '400px', '40%']}
          src={branch.src}
        />
        <Image
          animation='move 10s infinite linear'
          position="absolute"
          objectFit="cover"
          w={['200px', '200px', '300px', '400px', '50%']}
          right={['10%', '10%', '10%', '0', '0']}
          bottom={['40%', '40%', '40%', '30%', '30%']}
          src={foodForDog.src}
        />
        <Image
          animation='rotate 10s infinite linear'
          position="absolute"
          objectFit="cover"
          maxW="200px"
          w={['80px', '80px', '100px', '150px', '150px', '40%']}
          left={['10%', '10%', '10%', '40%', '40%']}
          top="20%"
          src={ballForDog.src}
        />
      </Flex>
      
      {/* Right side - content */}
      <Flex
        direction="column"
        gridGap="30px"
        px={["20px", "36px", "36px", "36px", "36px"]}
        justifyContent="center"
        textAlign={["center", "center", "center", "left", "left"]}
        className="solution-content"
        zIndex="1"
      >
        <Box>
          <Text 
            textTransform="uppercase" 
            color="#ED6436" 
            fontWeight="700"
            mb="3"
            letterSpacing="1px"
          >
            The Problem
          </Text>
          <Heading
            fontSize={["40px", "40px", "56px", "56px", "56px"]}
            fontWeight="700"
            lineHeight="1.1"
          >
            Traditional Pet Care is
            <Heading
              as="strong"
              color="#ED6436"
              fontSize="inherit"
              fontWeight="700"
              display="block"
            >
              {" "}Overwhelming
            </Heading>
          </Heading>
        </Box>
        
        <Text 
          fontSize="20px" 
          lineHeight="1.6"
          mb="4"
          maxW="600px"
        >
          Pet parents face multiple challenges when trying to ensure the best care for their furry family members:
        </Text>
        
        <SimpleGrid 
          columns={[1, 1, 2, 2, 2]} 
          spacing="20px"
          maxW="600px"
        >
          {challenges.map((item, index) => (
            <Flex 
              key={index} 
              direction="row" 
              alignItems="flex-start"
              bg="white"
              p="4"
              borderRadius="lg"
              boxShadow="sm"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "md",
                transition: "all 0.3s ease"
              }}
            >
              <Box 
                mr="3" 
                mt="1"
                w="24px"
              >
                {item.icon}
              </Box>
              <Text fontSize="18px" lineHeight="1.5">
                {item.text}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Section2;