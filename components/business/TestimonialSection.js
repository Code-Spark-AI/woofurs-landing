// components/business/TestimonialSection.js
import React from 'react';
import { Flex, Heading } from '@chakra-ui/layout';
import TestimonialCard from '@components/business/TestimonialCard';

function TestimonialSection({ title, testimonials }) {
  return (
    <Flex
      id="testimonial"
      w="full"
      py="80px"
      px={["20px", "36px", "36px", "36px", "36px"]}
      direction="column"
      alignItems="center"
      bg="gray.50"
    >
      <Heading
        fontSize={["40px", "40px", "50px", "50px", "50px"]}
        fontWeight="700"
        mb="40px"
        textAlign="center"
      >
        {title}
      </Heading>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard 
          key={index}
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
        />
      ))}
    </Flex>
  );
}

export default TestimonialSection;