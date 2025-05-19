// components/business/CTASection.js
import React from 'react';
import { Flex, Heading, Text, Link, Box } from '@chakra-ui/layout';
import Btn from '@components/Btn';

function CTASection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <Flex
      w="full"
      py="80px"
      px={["20px", "36px", "36px", "36px", "36px"]}
      direction="column"
      alignItems="center"
      textAlign="center"
      bg="gray.50"
      borderRadius="lg"
      mx="auto"
      my="40px"
      maxW="1200px"
      boxShadow="lg"
    >
      <Heading
        fontSize={["40px", "40px", "50px", "50px", "50px"]}
        fontWeight="700"
        mb="20px"
        color="#333"
      >
        {title}
      </Heading>
      <Text fontSize="20px" maxW="800px" mb="40px" color="#555">
        {subtitle}
      </Text>
      <Link href={buttonLink} target="_blank">
        <Box className="cta-button">
          <Btn
            py={'22px'}
            txt={'uppercase'}
            fSize={'16px'}
            letterSpacing={'1.2px'}
            title={buttonText}
            borderTopStartRadius={'none'}
            change={true}
            colorHover={'#ed6436'}
            color={'white'}
            width={'220px'}
            gap={'12px'}
            fw={'700'}
          />
        </Box>
      </Link>
    </Flex>
  );
}

export default CTASection;