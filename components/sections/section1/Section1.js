// components/sections/section1/Section1.js
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import { Badge } from "@chakra-ui/react";

import CloudRightImage2 from "@components/clouds/CloudRightImage2";
import BoneIcon from "@icons/BoneIcon";
import bgImage from "../../../resources/images/image-background-h.jpg";
import image from "../../../resources/images/husky-play.jpg";
import HouseDogIcon from "@icons/HouseDogIcon";
import StarIcon from "@icons/StarIcon";
import { nanoid } from "nanoid";

function Section1() {
  return (
    <Flex
      id="home"
      w="full"
      className="scroll-mt enhanced-hero-section"
      justifyContent={[
        "center",
        "center",
        "center",
        "space-between",
        "space-between",
      ]}
      alignItems={["center", "center", "center", "flex-start", "flex-start"]}
      px={["20px", "36px", "36px", "36px", "36px"]}
      textAlign={["center", "center", "center", "left", "left"]}
      flexDirection={["column", "column", "column", "row", "row"]}
      pt="80px"
      pb={["40px", "40px", "40px", "0", "0"]}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        width="300px"
        height="300px"
        bg="#FFC833"
        opacity="0.1"
        borderRadius="full"
        zIndex="-1"
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        width="200px"
        height="200px"
        bg="#7AC143"
        opacity="0.1"
        borderRadius="full"
        zIndex="-1"
      />
      
      {/* Hero content */}
      <Box 
        w="full" 
        className="home-hero-content"
        zIndex="1"
      >
        <Heading
          fontSize={["50px", "50px", "76px", "76px", "76px"]}
          fontWeight="700"
          mt="30px"
          lineHeight="1.1"
        >
          <Text
            as="strong"
            fontSize="inherit"
            fontWeight="inherit"
            color="#ED6436"
          >
            Every Paw Deserves the Best Care,
          </Text>{" "}
          <Text as="span">Instantly</Text>
        </Heading>
        
        <Flex
          mt="30px"
          mb={["30px", "30px", "30px", "40px", "40px"]}
          mx={["auto", "auto", "auto", "0px", "0px"]}
          alignItems="flex-start"
          position="relative"
          maxW={["100%", "100%", "100%", "80%", "80%"]}
        >
          <Flex direction="column">
            <Text
              whiteSpace="pre-wrap"
              fontSize={["20px", "20px", "22px", "24px", "24px"]}
              lineHeight="1.5"
              mb="20px"
              fontWeight="500"
            >
              <Flex direction="row" alignItems="flex-start">
                <Flex 
                  w="150px" 
                  mr="20px" 
                  mt="5px"
                  color="#7AC143"
                >
                  <HouseDogIcon />
                </Flex>
                <Text>
                  Connect with verified groomers, boarders, walkers, and vets.
                  Save time. Ensure safety. Pamper your pets.
                </Text>
              </Flex>
            </Text>
            
            {/* Features highlights */}
            <Flex 
              direction="column" 
              mb="30px"
              pl={["0", "0", "0", "60px", "60px"]}
            >
              {[
                "Verified pet care professionals",
                "Real-time booking and tracking",
                "Digital health records",
                "24/7 support for pet parents"
              ].map((feature, index) => (
                <Flex key={index} alignItems="center" mb="2">
                  <Box color="#ED6436" mr="2" w="20px" h="20px">
                    <StarIcon color="#7AC143" />
                  </Box>
                  <Text fontSize="18px">{feature}</Text>
                </Flex>
              ))}
            </Flex>
            
            <Flex 
              direction="row"
              justifyContent={["center", "center", "center", "flex-start", "flex-start"]}
            >
              <Link
                href="#features"
                className="cta-button"
              >
                <Flex
                  w="260px"
                  cursor="pointer"
                  transition="transform .3s ease"
                  position="relative"
                  mx={["auto", "auto", "auto", "0px", "0px"]}
                  justifyContent="center"
                  _hover={{
                    transform: "translateY(-5px)",
                  }}
                >
                  <Flex
                    w={["240px", "240px", "240px", "100%", "100%"]}
                    h={["240px", "240px", "240px", "100%", "100%"]}
                  >
                    <BoneIcon
                      url={bgImage.src}
                      x={"-110"}
                      y={"0"}
                      sizeW={"200%"}
                      sizeH={"100%"}
                      id={"home-cta-bone"}
                    />
                  </Flex>
                  <Text
                    as="strong"
                    color="white"
                    fontSize="18px"
                    top={["44%", "44%", "44%", "39%", "39%"]}
                    left={["14%", "14%", "14%", "14%", "14%"]}
                    transform="rotate(-5.8deg)"
                    position="absolute"
                    textTransform="uppercase"
                    userSelect="none"
                  >
                    Browse Services
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      <Box 
        w={["100%", "100%", "100%", "120%", "120%"]} 
        maxW="1000px"
        className="home-hero-image"
      >
        <CloudRightImage2
          id={"wolfImg"}
          url={image.src}
          x={"-380"}
          y={"-200"}
          sizeW={"180%"}
          sizeH={"180%"}
        />
      </Box>
    </Flex>
  );
}

export default Section1;