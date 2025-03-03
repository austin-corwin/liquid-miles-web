import { useState } from "react";

const FaqItem = ({
  item,
}: {
  item: { title: string; body: string; id: string };
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { title, body } = item;
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <li
      key={title}
      onClick={handleClick}
      className='uppercase font-primary font-extrabold w-full list-decimal text-base lg:text-2xl cursor-pointer'
    >
      {title && (
        <div className='w-full relative flex justify-between'>
          <h2>{title}</h2>
          <div className='h-8 w-8 overflow-hidden relative'>
            <div className='absolute h-8 w-8 -top-3  '>
              <svg
                width='3rem'
                height='3rem'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className={
                  isExpanded
                    ? ` transition-all duration-300 rotate-180`
                    : "transition-all duration-300 rotate-0"
                }
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
        </div>
      )}
      {body && (
        <p
          className={
            !isExpanded
              ? `w-full normal-case font-normal text-base h-full opacity-0 max-h-0 overflow-hidden transition-all ease-in-out duration-300`
              : `w-full normal-case font-normal text-base h-full max-h-[20rem] opacity-100 transition-all ease-in-out duration-300`
          }
        >
          {body}
        </p>
      )}
    </li>
  );
};

export default FaqItem;
