import pageContent from "@/config/pageContent";
const Rules = () => {
  const { rules } = pageContent;
  return (
    <>
      <h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3'>
        Rules
      </h1>
      <ol className='w-full text-xl text-white flex flex-col justify-center pl-12 gap-12'>
        {rules.map(({ title, body }) => (
          <li
            key={title}
            className='uppercase font-primary font-extrabold  w-full list-decimal text-base lg:text-2xl'
          >
            {title && <h2>{title}</h2>}
            {body && (
              <p className='w-full normal-case font-normal text-base'>{body}</p>
            )}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Rules;
