'use client'

import {
  Box,
  Icon,
  Step,
  StepIcon,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { FaFlagCheckered, FaMapMarker } from 'react-icons/fa'
import { registrationStepsConfig } from '../config/registrationStepsConfig'

interface RegistrationProgressProps {
  currentStep?: number
}

const RegistrationProgress: React.FC<RegistrationProgressProps> = ({}) => {
  const steps = registrationStepsConfig
  const router = useRouter()
  const handleClick = (path: string) => router.push(path)
  const pathname = usePathname()
  const [currentStep, setCurrentStep] = React.useState<number>(0)
  React.useEffect(() => {
    if (pathname) {
      setCurrentStep(
        Object.values(steps).findIndex((item) => item.path === pathname)
      )
    }
  }, [pathname, steps])

  return (
    <Box w='full' position='relative'>
      <Stepper index={currentStep} size='sm' gap={0} colorScheme='gray'>
        {Object.values(steps).map((step, index) => (
          <Step key={index} gap='0' onClick={() => handleClick(step.path)}>
            <StepIndicator
              background={index < currentStep ? 'gray.200 !important' : 'white'}
              border='none'
              _complete={{ bg: 'pink.400' }}
            >
              <StepStatus
                complete={<StepIcon color='green.700' />}
                incomplete={
                  index === 3 ? (
                    <FaFlagCheckered />
                  ) : (
                    <Icon as={FaMapMarker} color='gray.300' />
                  )
                }
                active={<Icon as={FaMapMarker} color='green.700' />}
              />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export { RegistrationProgress }
