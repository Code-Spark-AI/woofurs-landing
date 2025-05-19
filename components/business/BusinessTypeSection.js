// components/business/BusinessTypeSection.js
import React from 'react';
import { Flex, Heading, Text, SimpleGrid } from '@chakra-ui/layout';
import BusinessTypeCard from '@components/cards/BusinessTypeCard';

function BusinessTypeSection({ title, subtitle, businessTypes }) {
  return (
    <Flex
      id="who-can-join"
      w="full"
      py="80px"
      px={["20px", "36px", "36px", "36px", "36px"]}
      direction="column"
      alignItems="center"
    >
      <Heading
        fontSize={["40px", "40px", "50px", "50px", "50px"]}
        fontWeight="700"
        mb="40px"
        textAlign="center"
      >
        {title}
      </Heading>
      <Text mb="20px" fontSize="18px" textAlign="center">
        {subtitle}
      </Text>
      <SimpleGrid
        columns={[1, 2, 2, 3, 5]}
        spacing="30px"
        w="full"
        maxW="1200px"
        mt="20px"
      >
        {businessTypes.map((type) => (
          <BusinessTypeCard key={type.id} data={type} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default BusinessTypeSection;