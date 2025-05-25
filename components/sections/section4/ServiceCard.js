// components/sections/section4/ServiceCard.js
import { Flex, Text, Box } from "@chakra-ui/layout";
import React from "react";

function ServiceCard({ data }) {
  return (
    <Flex
      borderRadius="xl"
      bg="white"
      px="30px"
      py="40px"
      direction="column"
      gridGap="24px"
      alignItems="center"
      textAlign="center"
      boxShadow="lg"
      transition="all 0.3s ease"
      position="relative"
      overflow="hidden"
      _hover={{
        transform: "translateY(-10px)",
        boxShadow: "xl",
      }}
      className="service-card"
    >
      {/* Decorative color block */}
      <Box
        position="absolute"
        top="0"
        left="0"
        height="10px"
        width="100%"
        bg={data.color || "#ED6436"}
      />
      
      {/* Icon with colored background */}
      <Flex
        w="80px"
        h="80px"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        bg={`${data.color}15` || "#ED643615"}
        mb="4"
      >
        <Flex w="50px" h="50px" color={data.color || "#ED6436"}>
          {data.icon}
        </Flex>
      </Flex>
      
      {/* Content */}
      <Text
        as="h3"
        fontSize="24px"
        fontWeight="700"
        color="#333"
      >
        {data.title}
      </Text>
      
      <Text lineHeight="1.6" fontSize="18px" color="#555">
        {data.description}
      </Text>
      
      {/* Learn More text */}
      {/* <Text
        fontSize="16px"
        fontWeight="600"
        color={data.color || "#ED6436"}
        mt="auto"
        cursor="pointer"
        _hover={{
          textDecoration: "underline",
        }}
      >
        Learn More
      </Text> */}
    </Flex>
  );
}

export default ServiceCard;