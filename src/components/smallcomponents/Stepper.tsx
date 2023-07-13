import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, Text, VStack, useSteps } from "@chakra-ui/react";
import { useState } from "react";

const steps = [
  { title: 'MY CART', description: 'Contact Info' },
  { title: 'ADDRESS', description: 'Date & Time' },
  { title: 'PAYMENT', description: 'Select Rooms' },
]

export default function StepperFunc(step:{ step: number }) {
  const { activeStep } = useSteps({
    index: step.step,
    count: steps.length,
  })

  return (
    <Stepper size={{base:'sm',md:'md',lg:'lg'}} index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle>{step.title}</StepTitle>
            {/* <StepDescription>{step.description}</StepDescription> */}
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}