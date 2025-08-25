import { Faq } from '@/api/gql/graphql'
import React from 'react'
import FaqItem from '../Faqs/FaqItem'

interface AboutProps {
  apiFaqs: Faq[]
}

const About: React.FC<AboutProps> = ({ apiFaqs = [] }) => {
  return (
    <div className='bg-secondary'>
      <h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3 '>
        About
      </h1>
      <ol className='w-full text-xl text-white flex flex-col justify-center pl-12 pr-10 gap-12 h-full'>
        {apiFaqs.map((faq) => (
          <FaqItem key={faq._id} item={faq} />
        ))}
      </ol>
    </div>
  )
}
export default About
