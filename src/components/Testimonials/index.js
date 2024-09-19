import React, { forwardRef } from "react";
import {
  TestimonialsContainer,
  TestimonialsHeader,
  TestimonialsWrapper,
  Card,
  CardImage,
  CardDescription,
  ScrollContent,
} from "./TestimonialsElements";
import { TestimonialsData as data } from "./data";
import { CardName } from "../Projects/ProjectsElements";

const Testimonials = forwardRef(({}, ref) => {
  return (
    <TestimonialsContainer ref={ref}>
      <TestimonialsHeader>Testimonials</TestimonialsHeader>
      {/* <marquee scrollamount="10"> */}
      <TestimonialsWrapper>
        <ScrollContent>
          {data.map((testimonial, index) => {
            return (
              <Card key={index}>
                <CardImage src={testimonial.img}></CardImage>
                <CardName>{testimonial.name}</CardName>
                <CardName>{testimonial.position}</CardName>
                <CardDescription>{testimonial.feedback}</CardDescription>
              </Card>
            );
          })}
        </ScrollContent>
      </TestimonialsWrapper>
      {/* </marquee> */}
    </TestimonialsContainer>
  );
});

export default Testimonials;
