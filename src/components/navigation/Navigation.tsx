import Image from "next/image";
import lmLogo from "../../../public/logos/lm-logo.png";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className='w-full h-16 bg-primary flex items-center justify-between px-4'>
      <div className='flex items-center'>
        <Link href='/#about' className='relative w-14 h-14 flex'>
          <Image
            src={lmLogo}
            alt='Logo showing white ribbon with checkered background and cartoon beer'
          />
        </Link>
        <Link
          href='/'
          className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
        >
          Liquid Miles
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <Link
          href='#about'
          className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
        >
          About
        </Link>
        <Link
          href='/rules'
          className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
        >
          Rules
        </Link>
        <Link
          href='/faqs'
          className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
        >
          FAQs
        </Link>
        <Link
          href='/contact'
          className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
