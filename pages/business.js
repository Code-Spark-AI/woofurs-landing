// pages/business.js
import { Fragment } from "react";
import { LinkPreview } from "@components/ui/LinkPreview";
import logo from '../resources/images/wigglyPet.svg';
import bgImage from "../resources/images/image-background-h.jpg";
import dogImage from "../resources/images/dog-swimming.jpg";
import { nanoid } from "nanoid";
import AlarmClockIcon from "@icons/AlarmClockIcon";
import BallIcon from "@icons/BallIcon";
import DogIcon from "@icons/DogIcon";
import CatIcon from "@icons/CatIcon";
import BrushIcon from "@icons/BrushIcon";
import QuoteRightIcon from "@icons/QuoteRightIcon";
import StarBullet from "@icons/StarBullet";
import CloudLeftImgBorderNone from "@components/clouds/CloudLeftImgBorderNone";
import { Box, Flex, Heading, Text, Link } from "@chakra-ui/layout";

// Business Page Components
import BusinessHero from "@components/business/BusinessHero";
import BusinessTypeSection from "@components/business/BusinessTypeSection";
import BenefitsSection from "@components/business/BenefitsSection";
import FeaturesSection from "@components/business/FeaturesSection";
import TestimonialSection from "@components/business/TestimonialSection";
import CTASection from "@components/business/CTASection";

export default function Business() {
  const benefitCards = [
    {
      id: nanoid(),
      icon: <BallIcon colorFill={"#7AC143"} />,
      title: "More Customers, Less Marketing",
      description: `We bring you direct bookings from pet parents near you, no more chasing leads.`,
    },
    {
      id: nanoid(),
      icon: <BrushIcon colorFill={"#7AC143"} />,
      title: "Tools to Simplify Your Day",
      description: `Get access to our partner dashboard to manage bookings, schedules, payments, and reviews, all in one place.`,
    },
    {
      id: nanoid(),
      icon: <AlarmClockIcon />,
      title: "Real Support, Real Growth",
      description: `From onboarding to optimizing your profile, our team helps you grow with personalized insights.`,
    },
    {
      id: nanoid(),
      icon: <DogIcon />,
      title: "Zero Upfront Cost",
      description: `List your business for free. We earn only when you do.`,
    },
  ];

  const businessTypes = [
    {
      id: nanoid(),
      icon: <CatIcon />,
      title: "Veterinary Clinics & Home Vets",
    },
    {
      id: nanoid(),
      icon: <BrushIcon colorFill={"#7AC143"} />,
      title: "Pet Grooming Salons & Freelancers",
    },
    {
      id: nanoid(),
      icon: <DogIcon />,
      title: "Trainers & Behavior Specialists",
    },
    {
      id: nanoid(),
      icon: <AlarmClockIcon />,
      title: "Pet Boarding & Daycare Centers",
    },
    {
      id: nanoid(),
      icon: <BallIcon colorFill={"#7AC143"} />,
      title: "Canine & Feline Nutritionists",
    },
  ];

  const features = [
    "Dedicated business profile",
    "Verified badge to build trust",
    "Real-time appointment management",
    "Payments & payouts dashboard",
    "Customer reviews & ratings",
    "Marketing support & seasonal campaigns",
    "Priority support for partners",
  ];

  const testimonials = [
    {
      quote: "Wiggly Pet helped double my bookings in just 2 months. I no longer worry about marketing, I just focus on grooming the pups!",
      name: "NEHA",
      role: "Professional Groomer"
    }
  ];

  const formLink = "https://forms.gle/SAXr25vQpbdMjjxs9";

  return (
    <Fragment>
      {/* Hero Section */}
      <BusinessHero 
        highlight="Grow Your Pet Care"
        title="Business With Zero Hassle"
        description="Join the Wiggly Pet network and connect with thousands of pet parents looking for trusted services. Whether you're a vet, groomer, trainer, or shelter. Wiggly Pet helps you get discovered, manage bookings, and focus on what you do best: caring for pets."
        ctaText="Join Now"
        bgImage={bgImage}
        heroImage={dogImage}
        formLink={formLink}
      />

      {/* Who Can Join Section */}
      <BusinessTypeSection 
        title="Who Can Join?"
        subtitle="If you offer quality care, Wiggly Pet is your platform to scale."
        businessTypes={businessTypes}
      />

      {/* Why Partner With Us Section */}
      <BenefitsSection 
        title="Why Partner With Us?"
        benefits={benefitCards}
      />

      {/* What You Get Section */}
      <Flex
        id="features"
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
            What You Get
          </Heading>
          <Flex direction="column" spacing="4">
            {features.map((feature, index) => (
              <Flex key={index} alignItems="center" mb="3">
                <Flex w="24px" h="24px" mr="5" alignItems={"center"}>
                  <StarBullet />
                </Flex>
                <Text fontSize="18px">{feature}</Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Box w={["100%", "100%", "100%", "50%", "50%"]} maxW="500px">
          <CloudLeftImgBorderNone
            id={"features-image"}
            url={dogImage.src}
            x={"0"}
            y={"0"}
            sizeW={"100%"}
            sizeH={"100%"}
          />
        </Box>
      </Flex>

      {/* Testimonial Section */}
      <TestimonialSection 
        title="Hear From Our Partners"
        testimonials={testimonials}
      />

      {/* CTA Section */}
      <CTASection 
        title="Ready to Grow?"
        subtitle="It only takes 5 minutes to get started. Join the Wiggly Pet Partner Program today and watch your business thrive."
        buttonText="Become a Partner"
        buttonLink={formLink}
      />

      <LinkPreview 
        title={'WigglyPet | Partner with us'} 
        imageUrl={logo} 
        description={'Grow Your Pet Care Business With Zero Hassle. Join the Wiggly Pet network and connect with thousands of pet parents looking for trusted services.'} 
      />
    </Fragment>
  );
}