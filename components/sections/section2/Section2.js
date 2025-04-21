import React from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/layout";

import Btn from "@components/Btn";
import ContainerImages from "./ContainerImages";
import StarIcon from "@icons/StarIcon";

function Section2() {
  return (
    <Flex
      w="full"
      id="solution"
      className="scroll-mt"
      flexDirection={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "row",
        "row",
      ]}
      mt={["40px", "40px", "40px", "40px", "40px"]}
    >
      <ContainerImages />
      <Flex
        direction="column"
        gridGap="30px"
        px={["20px", "36px", "36px", "36px", "36px"]}
        justifyContent="center"
        textAlign={["center", "center", "center", "left", "left"]}
      >
        <Heading
          fontSize={["50px", "50px", "68px", "68px", "68px"]}
          fontWeight="700"
        >
          Traditional Pet Care is
          <Heading
            as="strong"
            color="#ED6436"
            fontSize="inherit"
            fontWeight="700"
          >
            {" "}
            Overwhelming
          </Heading>
        </Heading>
        <Flex direction={"column"}>
          <Flex direction={"row"} alignItems={"center"}>
            <StarIcon />
            <Text whiteSpace="pre-wrap" fontSize="20px" lineHeight="1.7" ml={5}>
              Spending hours finding reliable pet services
            </Text>
          </Flex>
          <Flex direction={"row"}>
            <StarIcon />
            <Text whiteSpace="pre-wrap" fontSize="20px" lineHeight="1.7" ml={5}>
              Managing multiple contacts for different needs
            </Text>
          </Flex>
          <Flex direction={"row"}>
            <StarIcon />
            <Text whiteSpace="pre-wrap" fontSize="20px" lineHeight="1.7" ml={5}>
              Worrying about your pet&apos;s safety with unknown providers
            </Text>
          </Flex>
          <Flex direction={"row"}>
            <StarIcon />
            <Text whiteSpace="pre-wrap" fontSize="20px" lineHeight="1.7" ml={5}>
              Keeping track of health records across various clinics
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Section2;
