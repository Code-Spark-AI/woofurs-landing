import React from 'react';
import BallIcon from '@icons/BallIcon';
import BrushIcon from '@icons/BrushIcon';
import Bone2Icon from '@icons/Bone2Icon';
import ContainerButtons from './ContainerButtons';
import { Flex, Heading, Text } from '@chakra-ui/layout';
import ContainerIconServices from '../common/ContainerIconServies';
import CloudRightImage4 from '@components/clouds/CloudRightImage4';
import dogImage from '../../../resources/images/dog-swimming.jpg'
import { nanoid } from 'nanoid';
import TaxIcon from '@icons/TaxIcon';

function Section3() {

    const data = {
        services: [
            {
                id: nanoid(),
                title: "All-in-One Services",
                icon: <Bone2Icon />,
                description: `Find groomers, boarders, walkers, vets, and stores in seconds - everything your pet needs in just a few taps.`
            },
            {
                id: nanoid(),
                title: "Digital Pet Profiles",
                icon: <BallIcon colorFill={'white'} />,
                description: `Keep all health records, vaccination history, and pet details in one place - never lose important information again.`
            },
            {
                id: nanoid(),
                title: "Verified Professionals",
                icon: <BrushIcon colorFill={'white'} />,
                description: `Every service provider undergoes rigorous background checks and skill verification - trust who cares for your pet.`
            },
            {
                id: nanoid(),
                title: "Peace of Mind",
                icon: <TaxIcon />,
                description: `Track services in real-time and communicate directly with providers - stay connected to your pet's care.`
            }
        ],
        buttons: [
            // {
            //     id: nanoid(),
            //     title: "view more",
            // },
            {
                id: nanoid(),
                title: "schedule demo",
                url: 'https://topmate.io/gssridhar/1248303'
            },
        ]
    }

    return (
        <Flex
            w="full"
            pt="20px"
            pb="100px"
            mt={["40px", "40px", "40px", "30px", "30px"]}
            direction={['column', 'column', 'column', 'row', 'row']}
            justifyContent="space-between"
            className="scroll-mt"
            alignItems={['center', 'center', 'center', 'flex-start', 'flex-start',]}
            pl={['0px', '0px', '0px', '78px', '78px']}
            textAlign={['center', 'center', 'center', 'left', 'left']}
        >
            <Flex
                direction="column"
                gridGap="40px"
                px={['20px', '36px', '36px', '0px', '0px']}
            >
                <Heading fontSize={['50px', '50px', '68px', '68px', '68px']} fontWeight="700" >
                One App for  
                    <Heading as="strong" color="#ED6436" fontSize="inherit" fontWeight="700" > All Your Pet Care Needs </Heading>
                </Heading>
                {/* <Text whiteSpace="pre-wrap" fontSize="18px" lineHeight="1.7" >
                    Our puppies and other very active dogs have plenty of
                    space to run and romp, and comfy blankets.
                </Text> */}
                <ContainerIconServices data={data.services} />
            </Flex>
            <Flex w={['full', 'full', 'full', '1300px', '1300px']} mt={['0px', '0px', '0px', '-100px', '-100px']} direction="column" alignItems="center">
                <CloudRightImage4
                    id={'1szqADW'}
                    url={dogImage.src}
                    sizeW={'120%'}
                    sizeH={'140%'}
                    x={'-120'}
                    y={'0'}
                />
                {/* <ContainerButtons data={data.buttons} /> */}
            </Flex>
        </Flex>
    );
}

export default Section3;