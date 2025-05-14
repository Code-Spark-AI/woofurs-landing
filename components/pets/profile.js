import React from "react";
import { Box, Image, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { PetTimeline } from "./timeline";
import { calculateAge } from "lib/utils";
import ContainerSocialNetworks from "@components/social_networks/ContainerSocialNetworks";
import Linkedin from "@components/social_networks/Linkedin";
import { useRouter } from "next/router";
import Whatsapp from "@components/social_networks/Whatsapp";
import { LinkPreview } from "@components/ui/LinkPreview";

export const PetProfile = ({ pet }) => {
  const router = useRouter();
  const shareUrl = router.asPath;

  const socialNetworks = [
    {
      id: 1,
      socialNetwork: "Whatsapp",
      iconSvg: <Whatsapp />,
      url: `https://wa.me/?text=${pet.name}'s public profile: https://www.wigglypet.com${shareUrl}`,
    },
    {
      id: 2,
      socialNetwork: "Linkedin",
      iconSvg: <Linkedin />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=https://www.wigglypet.com${shareUrl}`,
    },
  ];

  const petAge = calculateAge(pet.dateOfBirth);
  return (
    <Flex
      id={`petprofile-${pet.id}`}
      w="full"
      py="100px"
      px={["20px", "20px", "20px", "76px", "76px"]}
      flexDirection="column"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box p={4}>
          <Flex alignItems="flex-start">
            <Image
              src={pet.imageUrl}
              alt={`${pet.name}'s photo`}
              width="250px"
              height="350px"
              mr={4}
              borderRadius={"100px"}
            />
            <Flex direction={"column"}>
              <Flex justifyContent={'space-between'}>
                <Box>
                  <Heading as="h1" size="xl" color="#ED6436">
                    {pet.name}
                  </Heading>
                  <Text fontSize="lg">{pet.breed}</Text>
                  <Text fontSize="lg">
                    {petAge} years old, {pet.gender}
                  </Text>
                  <Text mt={2}>{pet.special_traits}</Text>
                </Box>
                <ContainerSocialNetworks
                  data={socialNetworks}
                  mtSize={"29px !important"}
                  gap={"14px"}
                />
              </Flex>
              <Flex>
                <Text mt={2}>{pet.special_traits}</Text>
                <Text mt={4}>{pet.bio}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Heading
            as="h3"
            size="md"
            my={8}
          >{`Pawsome Memories - A Timeline of Your ${pet.name}'s Journey`}</Heading>
          <PetTimeline pet={pet} />
          <Heading
            as="h3"
            size="md"
            my={8} color="#ED6436"
          >{`${pet.name}'s Badges`}</Heading>
          <Flex>
            {pet.skills &&
              pet.skills.map((skill) => (
                <Image
                  key={pet.name + skill.name}
                  src={skill.image}
                  alt={`${pet.name + skill.name}'s badge + `}
                  width="100px"
                  mr={4}
                  title={`${pet.name}'s badge: ${skill.name}`}
                  borderRadius={'3xl'}
                />
              ))}
          </Flex>
        </Box>
      </motion.div>
      <LinkPreview description={pet.bio} imageUrl={pet.imageUrl} title={`${pet.name} | ${pet.location} | ${pet.breed} | wigglypet - Profile`}/>
    </Flex>
  );
};
