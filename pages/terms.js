

import React from 'react';
import { Link } from "@chakra-ui/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

const Terms = () => {
    return (
        <>
            <Flex
                id="terms" w="full" className="scroll-mt"
                justifyContent={["center", "center", "center", "space-between"]}
                px={["20px", "36px", "36px", "36px"]}
                textAlign={["center", "center", "center", "left"]}
                flexDirection={["column", "column", "column", "row"]}
                pt="80px">
                <Box w="full" maxW="1000px" mx="auto">
                    <Heading
                        fontSize={["32px", "40px", "48px", "56px"]}
                        fontWeight="700"
                        mt="60px"
                        mb="10px"
                    >
                        Terms and Conditions
                    </Heading>

                    <Text fontSize="lg" color="gray.600" mb="6">
                        Effective November 11, 2024
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Acceptance of Terms
                    </Text>
                    <Text mb="4">
                        By accessing or using WigglyPet’s services, you agree to comply with and be bound by these Terms and Conditions and any other policies, including our Privacy Policy, incorporated by reference.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Eligibility
                    </Text>
                    <Text mb="4">
                        You must be at least 18 years old to use WigglyPet. By using our platform, you confirm that you meet this eligibility requirement.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Services Provided
                    </Text>
                    <Text mb="4">
                        WigglyPet provides a platform that connects pet owners with pet care providers, including groomers, trainers, boarders, and veterinarians. WigglyPet does not directly offer any pet care services, nor does it employ pet care providers. We facilitate connections and communication only.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        User Responsibilities
                    </Text>
                    <Text mb="4">
                        <ul className="list-disc list-inside space-y-2">
                            <li><span className="font-bold">Accuracy of Information</span>: You are responsible for providing accurate, current, and complete information when using our platform, whether you are a pet owner or a service provider.</li>
                            <li><span className="font-bold">Compliance</span>: You agree to use our platform in compliance with all applicable laws, regulations, and these Terms.</li>
                            <li><span className="font-bold">Account Security</span>: You are responsible for maintaining the confidentiality of your account login information and are responsible for all activities that occur under your account.</li>
                        </ul>
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Service Providers
                    </Text>
                    <Text mb="4">
                        Service providers listed on WigglyPet, including groomers, trainers, boarders, and veterinarians, are third-party entities. WigglyPet does not endorse, vet, or guarantee the quality of services provided by these third parties.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Payment and Fees
                    </Text>
                    <Text mb="4">
                        WigglyPet may charge fees for certain services, and fees may apply to transactions with pet care providers. These fees will be clearly indicated and may be subject to change. WigglyPet is not responsible for the payment policies or refund practices of any service provider.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Use of AI-Powered Health Insights
                    </Text>
                    <Text mb="4">
                        WigglyPet provides AI-powered health insights to help pet owners and service providers make informed decisions. These insights are recommendations only and should not replace professional veterinary advice. Always consult with a qualified veterinarian for medical issues.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Content Ownership and Rights
                    </Text>
                    <Text mb="4">
                        <ul className="list-disc list-inside space-y-2">
                            <li><span className="font-bold">User-Submitted Content</span>: By submitting any content on our platform, you grant WigglyPet a non-exclusive, worldwide, royalty-free, and transferable license to use, display, reproduce, and modify this content as necessary to operate our services.</li>
                            <li><span className="font-bold">Platform Content</span>: WigglyPet retains ownership of all proprietary information and intellectual property displayed on the platform. Unauthorized reproduction, distribution, or modification of this content is prohibited.</li>
                        </ul>
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Privacy and Data Usage
                    </Text>
                    <Text mb="4">
                        WigglyPet collects and uses personal information as described in our Privacy Policy. By using our platform, you agree to our data collection and usage practices.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Liability Limitation
                    </Text>
                    <Text mb="4">
                        WigglyPet is not liable for any damages or losses related to your use of the platform or services obtained through it. This includes, but is not limited to, damages resulting from errors, service interruptions, or actions taken by third-party service providers.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Indemnification
                    </Text>
                    <Text mb="4">
                        You agree to indemnify and hold harmless WigglyPet, its affiliates, employees, and partners from any claims, liabilities, damages, or expenses arising from your use of the platform, violation of these Terms, or infringement of any third-party rights.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Termination
                    </Text>
                    <Text mb="4">
                        WigglyPet reserves the right to terminate or suspend your account at our discretion, without notice, for conduct we consider inappropriate or in violation of these Terms.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Changes to Terms
                    </Text>
                    <Text mb="4">
                        WigglyPet may modify these Terms at any time. Changes will be posted on this page with an updated date. Your continued use of the platform after changes are made constitutes acceptance of the revised Terms.
                    </Text>

                    <Text fontSize="xl" fontWeight="bold" mb="4">
                        Governing Law
                    </Text>
                    <Text mb="4">
                        These Terms are governed by and construed in accordance with the laws of [applicable jurisdiction]. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts in that jurisdiction.
                    </Text>

                    <Text mb="4">
                        If you have any questions about these Terms, please{" "}
                        <Link color="blue.500" href="/contact">contact us.</Link>
                    </Text>
                </Box>
            </Flex>
        </>
    );
};

export default Terms;