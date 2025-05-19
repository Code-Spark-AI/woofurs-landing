// components/cards/BusinessTypeCard.js
import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

function BusinessTypeCard({ data }) {
  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="white"
      p="6"
      borderRadius="xl"
      boxShadow="sm"
      className="benefit-card"
      h="100%"
      justifyContent="center"
    >
      <Flex w="60px" h="60px" mb="4" color="#ED6436">
        {data.icon}
      </Flex>
      <Text fontWeight="600" fontSize="18px" textAlign="center">
        {data.title}
      </Text>
    </Flex>
  );
}

export default BusinessTypeCard;