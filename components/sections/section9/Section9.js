import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import CloudRightImage2 from "@components/clouds/CloudRightImage2";

import bgImage from "../../../resources/images/image-background-h.jpg";

import BallIcon from "@icons/BallIcon";
import { nanoid } from "nanoid";
import Card from "./Card";
import bgImg from "../../../resources/images/checkInTime-bgImage.png";
import ContainerImage from "./ContainerImage";
import HouseDogIcon from "@icons/HouseDogIcon";
import Link from "next/link";
import BoneIcon from "@icons/BoneIcon";

function Section9() {
  const data = [
    {
      id: nanoid(),
      icon: <BallIcon colorFill={"#7AC143"} />,
      title: "Community",
      description: `We believe in fostering a strong, supportive community of pet owners and caregivers.`,
    },
    {
      id: nanoid(),
      icon: <BallIcon colorFill={"#7AC143"} />,
      title: "Accessibility",
      description: `We’re committed to making expert pet care available to all, anytime, anywhere through our AI-powered platform.`,
    },
    {
      id: nanoid(),
      icon: <BallIcon colorFill={"#7AC143"} />,
      title: "Responsible",
      description: `We uphold the highest standards of responsibility in all our actions, from caring for pets to managing our platform.`,
    },
    {
      id: nanoid(),
      icon: <BallIcon colorFill={"#7AC143"} />,
      title: "Empathy",
      description: `We approach every interaction with understanding and compassion, recognizing the emotional bond between pets and their parents.`,
    },
  ];

  return (
    <Flex
      w="full"
      id="values"
      className="scroll-mt"
      justifyContent={[
        "center",
        "center",
        "center",
        "space-between",
        "space-between",
      ]}
      alignItems={["center", "center", "center", "flex-start", "flex-start"]}
      pl={["0px", "0px", "0px", "78px", "78px"]}
      mt={["40px", "40px", "40px", "100px", "100px"]}
      textAlign={["center", "center", "center", "left", "left"]}
      flexDirection={["column", "column", "column", "row", "row"]}
      mb="100px"
    >
      <ContainerImage />
      <Box w="full">
        <Heading
          fontSize={["50px", "50px", "70px", "70px", "70px"]}
          fontWeight="700"
          mt="40px"
        >
          Ready to Give Your Pet <br />
          <Text
            as="strong"
            fontSize="inherit"
            fontWeight="inherit"
            color="#ED6436"
          >
            {" "}
            the Best Care?
          </Text>
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
                <Flex w="50px" mr="20px">
                  <HouseDogIcon />
                </Flex>
                Join Bangalore's growing community of happy pet parents.
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
                    left={["12%", "12%", "12%", "12%", "12%"]}
                    transform="rotate(-5.8deg)"
                    position="absolute"
                    textTransform="uppercase"
                    userSelect="none"
                  >
                    App Launching Soon
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        {/* <Flex direction="column" pt="50px" gridGap="44px" mr="5px">
          {data.map((e) => (
            <Card key={e.id} data={e} />
          ))}
        </Flex> */}
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
        ></Flex>
      </Box>
    </Flex>
  );
}

export default Section9;
