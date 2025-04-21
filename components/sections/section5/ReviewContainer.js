import { Box, Center, Flex, Text } from '@chakra-ui/layout';
import QuoteRightIcon from '@icons/QuoteRightIcon';
import React from 'react';

function ReviewContainer() {
    return (
        <Center
            w="68%"
            flexDirection="column"
            gridGap="46px"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start']}
        >
            <Flex
                fontSize="26px"
                fontWeight="700"
                lineHeight="1.6"
                position="relative"
                whiteSpace="pre-wrap"

            >
                <Box
                    position="absolute"
                    w={['40px', '40px', '60px', '70px', '70px']}
                    color="#ed6436"
                    left="0"
                    top={['-50px', '-50px', '-50px', '-90px', '-90px']}
                >
                    <QuoteRightIcon />
                </Box>
                managing my fur baby&apos;s care so much easier. From scheduling grooming appointments to finding a reliable dog walker, everything is just a tap away! The digital health records feature is a game-changer.
            </Flex>
            <Flex
                gridGap="10px"
                direction="column"
                fontWeight="700"
            >
                <Text color="#ed6436" textTransform="uppercase" >Priya K.</Text>
                <Text >Pet Parent, Koramangala, Bangalore</Text>
            </Flex>
        </Center>
    );
}

export default ReviewContainer;