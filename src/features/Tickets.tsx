import Link from "next/link";

const Tickets = () => {
  return (
    <>
      <h1 className='w-full mb-12 text-2xl lg:text-[6rem] font-extrabold font-primary uppercase text-white border-b-4 border-white lg:leading-[5rem] pb-3'>
        Tickets
      </h1>
      <Link href='#'>Buy tix</Link>
    </>
  );
};

export default Tickets;
