import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import {
  Button,
  Card as ChakraCard,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { GoArrowRight } from 'react-icons/go'

interface Card {
  header: string
  body: string
  onClick: { label: string; action: () => void }
}

export const Card = ({ header, body, onClick }: Card) => {
  return (
    <ChakraCard className='overflow-hidden p-4'>
      <div className='flex flex-row gap-2'>
        <div className='flex flex-col'>
          <Image
            width={300}
            height={300}
            src='/images/bg-beers.png'
            alt='alt here for example'
            className='rounded-lg overflow-hidden'
          />
        </div>
        <div className='flex flex-col w-full gap-2'>
          <CardHeader py={0}>
            {header && (
              <Heading color='secondary' {...headingRecipes.H4}>
                {header}
              </Heading>
            )}
          </CardHeader>
          {body && <CardBody py={0}>{body}</CardBody>}
          {onClick.label && (
            <CardFooter className='w-full justify-end'>
              <Button
                onClick={onClick.action}
                variant='link'
                className='flex items-center gap-2'
              >
                <Text>{onClick.label}</Text>
                <GoArrowRight className='relative' size={20} />
              </Button>
            </CardFooter>
          )}
        </div>
      </div>
    </ChakraCard>
  )
}
