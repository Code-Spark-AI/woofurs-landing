import React from 'react';
import { Link } from "@chakra-ui/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

const Privacy = () => {
    return (
        <>
            <Flex
                id="privacy-policy" w="full" className="scroll-mt"
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
                    >
                        Privacy Policy
                    </Heading>

                    <Text fontSize="lg" color="gray.600" mb="6">
                        Effective Date: November 11, 2024
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Introduction
                    </Text>
                    <Text mb="4">
                        This Privacy Policy explains how Woofurs collects, uses, and shares your personal information when you use our services. We are committed to protecting your privacy and ensuring transparency about how your data is handled.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Information We Collect
                    </Text>
                    <Text mb="4">
                        Woofurs collects information to provide and improve our services. We collect information in the following ways:
                    </Text>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        <li><span className="font-bold">Personal Information:</span> Information such as name, email address, and contact details that you provide when registering.</li>
                        <li><span className="font-bold">Activity Data:</span> Data related to your interactions with our services, such as search terms, views, and ad interactions.</li>
                        <li><span className="font-bold">Device Information:</span> Technical information about the devices you use to access our services, including browser type, IP address, and location data.</li>
                    </ul>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        How We Use Your Information
                    </Text>
                    <Text mb="4">
                        We use the information we collect to provide, improve, and personalize our services, as well as for security and legal compliance. Specific uses include:
                    </Text>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        <li>Providing user support and responding to inquiries</li>
                        <li>Customizing content and suggestions for pet services</li>
                        <li>Improving platform functionality based on usage patterns</li>
                        <li>Ensuring security and detecting potential misuse</li>
                    </ul>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Data Sharing and Disclosure
                    </Text>
                    <Text mb="4">
                        Woofurs may share your data with third-party service providers as necessary to operate our platform. We ensure these parties are obligated to safeguard your information and use it only for the purposes we specify. We may also share data to comply with legal obligations or if needed for our platform’s safety.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Third-Party Services and Links
                    </Text>
                    <Text mb="4">
                        Our platform may contain links to external sites. Woofurs is not responsible for the privacy practices of these third-party websites. We recommend reviewing their privacy policies independently.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Data Security
                    </Text>
                    <Text mb="4">
                        We take security seriously and implement measures to protect your data. While we strive to protect your personal information, please note that no electronic storage or transmission method is entirely secure.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Data Retention
                    </Text>
                    <Text mb="4">
                        We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        User Rights
                    </Text>
                    <Text mb="4">
                        You have rights regarding your personal data, including access, correction, deletion, and portability. If you would like to exercise any of these rights, please contact us.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Changes to this Privacy Policy
                    </Text>
                    <Text mb="4">
                        We may update this Privacy Policy periodically to reflect changes in our practices. We encourage you to review this page regularly for the latest information on our privacy practices.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Contact Us
                    </Text>
                    <Text mb="4">
                        If you have any questions about this Privacy Policy, please {" "}
                        <Link color="blue.500" href="/contact">
                            contact us.
                        </Link>
                    </Text>
                </Box>
            </Flex>
        </>
    );
};

export default Privacy;
