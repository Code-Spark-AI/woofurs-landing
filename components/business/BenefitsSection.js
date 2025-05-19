// components/business/BenefitsSection.js
import React from 'react';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/layout';
import BusinessBenefitCard from '@components/cards/BusinessBenefitCard';

function BenefitsSection({ title, benefits }) {
  return (
    <Flex
      id="why-partner"
      w="full"
      py="80px"
      px={["20px", "36px", "36px", "36px", "36px"]}
      direction="column"
      alignItems="center"
      bg="gray.50"
    >
      <Heading
        fontSize={["40px", "40px", "50px", "50px", "50px"]}
        fontWeight="700"
        mb="40px"
        textAlign="center"
      >
        {title}
      </Heading>
      <SimpleGrid
        columns={[1, 1, 2, 4, 4]}
        spacing="30px"
        w="full"
        maxW="1200px"
      >
        {benefits.map((benefit) => (
          <BusinessBenefitCard key={benefit.id} data={benefit} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default BenefitsSection;