'use client'

import { Faq } from '@/api/gql/graphql'
import { Content, Markdown } from '@/components/atoms/Markdown'
import { useState } from 'react'

const FaqItem = ({ item }: { item: Faq }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <li
      key={item._id}
      onClick={handleClick}
      className='uppercase font-primary font-extrabold w-full list-decimal text-base lg:text-2xl cursor-pointer'
    >
      {item.title && (
        <div className='w-full relative flex justify-between items-center'>
          <h2 className='flex-1 pr-2'>{item.title}</h2>
          <div className='flex-shrink-0 h-8 w-8 flex items-center justify-center'>
            <svg
              width='28'
              height='28'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className={`md:w-12 md:h-12 ${
                isExpanded
                  ? 'transition-all duration-300 rotate-180'
                  : 'transition-all duration-300 rotate-0'
              }`}
            >
              <g>
                <path
                  fill='#FFFFFF'
                  d='M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z'
                />
              </g>
            </svg>
          </div>
        </div>
      )}
      {item?.content && (
        <div
          className={
            !isExpanded
              ? `w-full normal-case font-normal text-base h-full opacity-0 max-h-0 overflow-hidden transition-all ease-in-out duration-300`
              : `w-full normal-case font-normal text-base h-full max-h-[20rem] opacity-100 transition-all ease-in-out duration-300`
          }
        >
          <Markdown content={item?.content as Content} />
        </div>
      )}
    </li>
  )
}

export default FaqItem
