// components/cards/BusinessBenefitCard.js
import React from 'react';
import { Flex, Text, Heading, Box } from '@chakra-ui/layout';

function BusinessBenefitCard({ data }) {
  return (
    <Flex
      borderRadius="3xl"
      bgColor="#F2F2F4"
      px="40px"
      maxW="320px"
      py="50px"
      direction="column"
      gridGap="40px"
      alignItems={["center", "center", "center", "center", "flex-start"]}
      textAlign={["center", "center", "center", "center", "left"]}
      h="100%"
      boxShadow="md"
      className="benefit-card"
    >
      <Flex w="60px">{data.icon}</Flex>
      <Flex direction="column" gridGap="16px">
        <Text
          as="h5"
          fontSize="24px"
          fontWeight="700"
          textTransform="capitalize"
          color="#ED6436"
        >
          {data.title}
        </Text>
        <Text lineHeight="1.6" fontSize="18px">
          {data.description}
        </Text>
      </Flex>
    </Flex>
  );
}

export default BusinessBenefitCard;