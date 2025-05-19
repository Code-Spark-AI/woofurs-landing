// components/business/FeaturesSection.js
import React from 'react';
import { Flex, Heading, Box } from '@chakra-ui/layout';
import FeatureList from '@components/business/FeatureList';
import CloudLeftImgBorderNone from '@components/clouds/CloudLeftImgBorderNone';

function FeaturesSection({ title, features, image }) {
  return (
    <Flex
      w="full"
      py="80px"
      px={["20px", "36px", "36px", "36px", "36px"]}
      direction={["column", "column", "column", "row", "row"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        direction="column"
        maxW="600px"
        pr={[0, 0, 0, "40px", "40px"]}
        mb={["40px", "40px", "40px", 0, 0]}
        textAlign={["center", "center", "center", "left", "left"]}
      >
        <Heading
          fontSize={["40px", "40px", "50px", "50px", "50px"]}
          fontWeight="700"
          mb="20px"
        >
          {title}
        </Heading>
        <FeatureList features={features} />
      </Flex>
      <Box w={["100%", "100%", "100%", "50%", "50%"]} maxW="500px">
        <CloudLeftImgBorderNone
          id={"features-image"}
          url={image.src}
          x={"0"}
          y={"0"}
          sizeW={"100%"}
          sizeH={"100%"}
        />
      </Box>
    </Flex>
  );
}

export default FeaturesSection;