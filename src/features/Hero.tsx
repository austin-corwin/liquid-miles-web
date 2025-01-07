// import Image from "next/image";
// import beersImage from "../../images/bg-beers.png";

const Hero = ({}) => {
  return (
    <section
      className={`w-full flex justify-center items-center min-h-screen `}
      style={{
        background: `no-repeat url("../../images/bg-beers.png")`,
        backgroundSize: "cover",
      }}
    >
      <div className='flex justify-center items-center'>
        <h1 className='text-white font-primary font-bold text-7xl'>
          Welcome to Liquid Miles
        </h1>
      </div>
    </section>
  );
};

export default Hero;
