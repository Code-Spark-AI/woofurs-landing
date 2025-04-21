import React from "react";
import { Flex, Text } from "@chakra-ui/layout";

function ContainerIconServices({ data }) {
  return (
    <Flex
      justifyContent={[
        "center",
        "center",
        "center",
        "flex-start",
        "flex-start",
      ]}
      flexDirection={["column", "column", "column", "column", "column"]}
      gridGap="6px"
      flexWrap="wrap"
      px={["20px", "20px", "20px", "0px", "0px"]}
    >
      {data.map((e) => (
        <>
          <Flex
            key={e.id}
            gridGap="6px"
            w="350px"
            h="60px"
            alignItems="center"
            textTransform="uppercase"
            fontWeight="700"
          >
            <Flex w="50px" h="50px" alignItems="center">
              {e.icon}
            </Flex>
            <Text as="h6">{e.title}</Text>
          </Flex>
          <Text
            whiteSpace="pre-wrap"
            px={["44px", "44px", "44px", "0px", "0px"]}
          >
            {e.description}
          </Text>
        </>
      ))}
    </Flex>
  );
}

export default ContainerIconServices;
