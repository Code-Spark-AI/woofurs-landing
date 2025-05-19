// components/business/TestimonialCard.js
import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/layout';
import QuoteRightIcon from '@icons/QuoteRightIcon';

function TestimonialCard({ quote, name, role }) {
  return (
    <Flex
      direction="column"
      bg="white"
      p={["6", "8", "10", "10", "10"]}
      borderRadius="xl"
      boxShadow="md"
      maxW="800px"
      position="relative"
    >
      <Box
        position="absolute"
        w={["40px", "40px", "60px", "70px", "70px"]}
        color="#ed6436"
        left="6"
        top="-30px"
      >
        <QuoteRightIcon />
      </Box>
      <Text 
        fontSize={["18px", "20px", "24px", "26px", "26px"]} 
        fontWeight="500" 
        mb="6"
        lineHeight="1.6"
      >
        {quote}
      </Text>
      <Flex alignItems="center">
        <Text fontWeight="700" color="#ed6436" fontSize="18px" mr="2">
          {name}
        </Text>
        <Text fontWeight="500">
          {role}
        </Text>
      </Flex>
    </Flex>
  );
}

export default TestimonialCard;