// import neighborhoodRoute from "../../images/neighborhoodRoute.jpg";

const About = () => {
  return (
    <div className='bg-secondary w-full flex justify-center py-12 pb-24'>
      <div className='container w-full flex gap-12'>
        <section className='gap-4 flex flex-col text-white max-w-[700px]'>
          <h2 className='text-white font-extrabold text-[4rem] font-primary'>
            What is Liquid Miles?
          </h2>
          <p>
            The Liquid Miles Challenge is a one-of-a-kind endurance event taking
            place on Saturday, August 3rd, 2024, in beautiful Fort Collins,
            Colorado. Participants will attempt to conquer a unique test of both
            athleticism and camaraderie: running 10 miles, drinking 10 beers,
            and doing it all within a 10-hour window. It’s a quirky combination
            of fitness, fun, and friendly competition that promises plenty of
            laughs and unforgettable memories.
          </p>
          <p>
            While we’d love to host everyone, accommodations are up to
            you—though our backyard is open for camping if you’re feeling
            adventurous. There’s a small participation fee, estimated at $55 per
            person, which includes an official event t-shirt to commemorate your
            heroic effort. If running or drinking isn’t your thing, you can
            still join in on the fun by volunteering as a referee or facilitator
            to help us keep everything running smoothly.
          </p>
          <p>
            At stake are annual bragging rights, a one-of-a-kind trophy sourced
            from Etsy, and the opportunity to cement your place in Liquid Miles
            history. Whether you’re in it for the glory, the laughs, or the
            challenge, we can’t wait to share this wild adventure with you. So,
            strap on your running shoes, practice your beer shotgun skills, and
            get ready to make history. Are you ready to take on the Liquid Miles
            Challenge?
          </p>
          <p>Prost!</p>
        </section>

        <div className='w-full max-w-[500px]'>
          <svg
            id='10015.io'
            viewBox='0 0 480 480'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <defs>
              <clipPath id='blob'>
                <path
                  fill='#474bff'
                  d='M460,280Q447,320,427.5,356.5Q408,393,375,418.5Q342,444,302,459Q262,474,218.5,472Q175,470,139.5,445Q104,420,79,387.5Q54,355,32.5,319Q11,283,10,240Q9,197,31.5,161Q54,125,78.5,91.5Q103,58,139,35.5Q175,13,218,15.5Q261,18,301,27.5Q341,37,374,62.5Q407,88,430.5,122.5Q454,157,463.5,198.5Q473,240,460,280Z'
                />
              </clipPath>
            </defs>
            <image
              x='0'
              y='0'
              width='100%'
              height='100%'
              clipPath='url(#blob)'
              xlinkHref={"../../images/neighborhoodRoute.jpg"}
              preserveAspectRatio='xMidYMid slice'
            ></image>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default About;
