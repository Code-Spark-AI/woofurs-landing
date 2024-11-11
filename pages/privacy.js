import React from 'react';
import { Link } from "@chakra-ui/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

const Privacy = () => {
    return (
        <>
            <Flex
                id="terms" w="full" className="scroll-mt"
                justifyContent={["center", "center", "center", "space-between"]}
                px={["20px", "36px", "36px", "36px"]}
                textAlign={["center", "center", "center", "left"]}
                flexDirection={["column", "column", "column", "row"]}
                pt="80px"
            >
                <Box w="full" maxW="1000px" mx="auto">
                    <Heading
                        fontSize={["32px", "40px", "48px", "56px"]}
                        fontWeight="700"
                        mt="60px"
                        mb="10px"
                        // color="#ED6436"
                    >
                        Privacy Policy
                    </Heading>

                    <Text fontSize="lg" color="gray.600" mb="6">
                        Effective September 16, 2024
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        We want you to understand the types of information we collect as you use our services
                    </Text>


                    <Text mb="4">
                        We collect information to provide better services to all our users — from figuring out basic stuff like which language you speak, to more complex things like which ads you’ll find most useful, the people who matter most to you online, or which YouTube videos you might like. The information Google collects, and how that information is used, depends on how you use our services and how you manage your privacy controls.</Text>
                    <Text mb="4">
                        When you’re not signed in to a Google Account, we store the information we collect with unique identifiers tied to the browser, application, or device you’re using. This allows us to do things like maintain your preferences across browsing sessions, such as your preferred language or whether to show you more relevant search results or ads based on your activity.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Your activity
                    </Text>
                    <Text mb="4">
                    <ul className="list-disc list-inside space-y-2">
                            <li>Terms you search for</li>
                            <li>Videos you watch</li>
                            <li>Views and interactions with content and ads</li>
                            <li>Voice and audio information</li>
                            <li>Purchase activity</li>
                        </ul>
                    </Text>


                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Third-Party Services
                    </Text>
                    <Text mb="4">
                        Our website may contain links to third-party sites. We do not control these services and are not responsible for their content or any harm resulting from their use.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Changes to Terms
                    </Text>
                    <Text mb="4">
                        We reserve the right to modify these terms at any time. Any changes will be updated on this page, and we encourage users to review this section periodically.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Contact Us
                    </Text>
                    <Text mb="4">
                        If you have any questions about these Terms, please{" "}<Link color="blue.500" href="/contact">
                            contact us. </Link>
                    </Text>
                </Box>
            </Flex>
        </>
    );
};

export default Privacy;