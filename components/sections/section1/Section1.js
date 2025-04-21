import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";
import React from "react";

import CloudRightImage2 from "@components/clouds/CloudRightImage2";
import BoneIcon from "@icons/BoneIcon";
import bgImage from "../../../resources/images/image-background-h.jpg";
import image from "../../../resources/images/husky-play.jpg";
import HouseDogIcon from "@icons/HouseDogIcon";
import StarIcon from "@icons/StarIcon";
import ContainerIconServices from "../common/ContainerIconServies";
import { nanoid } from "nanoid";

function Section1() {
  const data = {
    services: [
      {
        id: nanoid(),
        title: "Groomers",
        icon: <StarIcon />,
      },
      {
        id: nanoid(),
        title: "Boarders",
        icon: <StarIcon />,
      }
    ],
  };
  return (
    <Flex
      id="home"
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
      <Box w="full">
        <Heading
          fontSize={["50px", "50px", "76px", "76px", "76px"]}
          fontWeight="700"
          mt="60px"
        >
          <Text
            as="strong"
            fontSize="inherit"
            fontWeight="inherit"
            color="#ED6436"
          >
            Every Paw Deserves the Best Care,
          </Text>{" "}
          Instantly
        </Heading>
        <Flex
          mt="30px"
          mb={["0px", "0px", "0px", "80px", "80px"]}
          mx={["auto", "auto", "auto", "0px", "0px"]}
          alignItems="center"
          position="relative"
          className="vf"
        >
          <Flex direction={"column"}>
            <Text
              whiteSpace="pre-wrap"
              fontSize="24px"
              lineHeight="1.7"
              mb="20px"
              _hover={{
                color: "#ED6C41",
              }}
            >
              <Flex direction="row">
                <Flex w="150px" mr="20px">
                  <HouseDogIcon />
                </Flex>
                Connect with verified groomers, boarders, walkers, and vets.
                Save time. Ensure safety. Pamper your pets.
              </Flex>
            </Text>
            <Flex direction="row">
              <Link
                href="#features"
                // target="_blank"
              >
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
                      id={"0e0c67fa-1602-4a9d-86ba-32fc73c12670"}
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

      <Box w={["100%", "100%", "100%", "120%", "120%"]} maxW="1000px">
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
