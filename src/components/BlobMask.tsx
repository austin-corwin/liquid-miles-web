const BlobMask = ({ path, id }: { path: string; id: string }) => {
  return (
    <svg
      id='10015.io'
      viewBox='0 0 480 480'
      xmlns='http://www.w3.org/2000/svg'
      width='100%'
      height='100%'
    >
      <defs>
        <clipPath id={id}>
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
        clipPath={`url(#${id})`}
        href={path}
        preserveAspectRatio='xMidYMid slice'
      ></image>
    </svg>
  )
}

export default BlobMask
