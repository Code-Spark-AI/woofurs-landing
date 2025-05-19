// components/business/BusinessHero.js
import React from 'react';
import { Box, Flex, Heading, Text, Link, Badge } from "@chakra-ui/layout";
import BoneIcon from "@icons/BoneIcon";
import CloudRightImage2 from "@components/clouds/CloudRightImage2";

function BusinessHero({ title, highlight, description, ctaText, bgImage, heroImage, formLink = "https://forms.gle/SAXr25vQpbdMjjxs9" }) {
  return (
    <Flex
      w="full"
      className="scroll-mt"
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
    >
      <Box w="full" className="business-hero-content">
        <Badge 
          colorScheme="orange" 
          fontSize="sm" 
          px="3" 
          py="1" 
          borderRadius="full" 
          mb="4"
        >
          For Business Partners
        </Badge>
        <Heading
          fontSize={["50px", "50px", "76px", "76px", "76px"]}
          fontWeight="700"
          mt="10px"
        >
          <Text
            as="strong"
            fontSize="inherit"
            fontWeight="inherit"
            color="#ED6436"
          >
            {highlight}
          </Text>{" "}
          {title}
        </Heading>
        <Text
          whiteSpace="pre-wrap"
          fontSize="20px"
          lineHeight="1.7"
          mb="30px"
          mt="20px"
        >
          {description}
        </Text>
        <Flex direction="row">
          <Link href={formLink} target="_blank">
            <Flex
              w="260px"
              mt={["0px", "0px", "0px", "30px", "30px"]}
              cursor="pointer"
              transition="transform .3s ease"
              position="relative"
              mx={["auto", "auto", "auto", "0px", "0px"]}
              justifyContent="center"
              _hover={{
                transform: "rotate(10deg)",
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
                  id={"b2b-cta-bone"}
                />
              </Flex>
              <Text
                as="strong"
                color="white"
                fontSize="18px"
                top={["44%", "44%", "44%", "39%", "39%"]}
                left={"28%"}
                transform="rotate(-5.8deg)"
                position="absolute"
                textTransform="uppercase"
                userSelect="none"
                className="cta-button"
              >
                {ctaText}
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Box>

      <Box w={["100%", "100%", "100%", "120%", "120%"]} maxW="1000px" className="business-hero-image">
        <CloudRightImage2
          id={"b2b-hero-image"}
          url={heroImage.src}
          x={"-380"}
          y={"-200"}
          sizeW={"180%"}
          sizeH={"180%"}
        />
      </Box>
    </Flex>
  );
}

export default BusinessHero;