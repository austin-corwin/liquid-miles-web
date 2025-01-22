import pageContent from "@/config/pageContent";
import FaqItem from "./FaqItem";
import { useState } from "react";
const Faqs = () => {
  const { faqs } = pageContent;
  const [allCollapsed, setAllCollapsed] = useState(false);
  return (
    <>
      <h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3'>
        Faqs
      </h1>
      <ol className='w-full text-xl text-white flex flex-col justify-center pl-12 gap-12'>
        {faqs.map((faq) => (
          <FaqItem
            onClick={() => setAllCollapsed(true)}
            key={faq.title}
            item={faq}
          />
        ))}
      </ol>
    </>
  );
};

export default Faqs;
