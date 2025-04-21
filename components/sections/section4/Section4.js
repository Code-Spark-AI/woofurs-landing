import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { nanoid } from "nanoid"
import DogIcon from '@icons/DogIcon';
import CatIcon from '@icons/CatIcon';
import BrushIcon from '@icons/SpaIcon';
import HouseDogIcon from '@icons/HouseDogIcon';
import CardService from './CardService';
import TaxIcon from '@icons/TaxIcon';

function Section4() {

    const services = [
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'} />,
            title: "Grooming",
            description: `Professional grooming services that make your pet look and feel their best`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <HouseDogIcon />,
            title: "Boarding",
            description: `Safe, comfortable home-away-from-home when you're traveling`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <DogIcon />,
            title: "Veterinary",
            description: `At Home consultations and clinic appointments when you need them`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <CatIcon />,
            title: "Nutrition",
            description: `Customized diet plans and consultations with pet nutritionists`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <TaxIcon />,
            title: "Training",
            description: `Professional trainers for obedience, behavior, and specialty training`,
        },
        {
            id: nanoid(),
            url: "",
            icon: <BrushIcon colorFill={'#82C55B'}/>,
            title: "Walking",
            description: `Reliable dog walkers with video and photo updates to keep your pet healthy`,
        },

    ]

    return (
        <Flex
            id="features"
            w="full"
            py="100px"
            px={['20px', '20px', '20px', '76px', '76px']}
            gridGap="30px"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            flexDirection={['column', 'column', 'row', 'row', 'row']}
        >
            {
                services.map(e => (
                    <CardService key={e.id} data={e} style={{ flexBasis: '30%' }} />
                ))
            }

        </Flex>
    );
}

export default Section4;