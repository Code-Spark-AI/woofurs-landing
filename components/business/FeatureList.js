// components/business/FeatureList.js
import React from 'react';
import { Flex, Text, Stack } from '@chakra-ui/layout';
import CheckIcon from '@icons/CheckIcon';

function FeatureList({ features }) {
  return (
    <Stack spacing="4">
      {features.map((feature, index) => (
        <Flex key={index} alignItems="center">
          <Flex w="24px" h="24px" mr="3" color="#ED6436">
            <CheckIcon />
          </Flex>
          <Text fontSize="18px">{feature}</Text>
        </Flex>
      ))}
    </Stack>
  );
}

export default FeatureList;