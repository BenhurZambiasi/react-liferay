export const Locale = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={50}
    fill="none"
    {...props}>
    <g filter="url(#a)">
      <mask
        id="b"
        width={40}
        height={40}
        x={2}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}>
        <path fill="#D9D9D9" d="M2 1h40v40H2z" />
      </mask>
      <g mask="url(#b)">
        <path
          fill="#00804D"
          d="M22 37.666c-4.472-3.805-7.812-7.34-10.02-10.604C9.77 23.798 8.666 20.777 8.666 18c0-4.167 1.34-7.486 4.02-9.959C15.369 5.57 18.473 4.333 22 4.333c3.528 0 6.632 1.236 9.313 3.708 2.68 2.473 4.02 5.792 4.02 9.959 0 2.777-1.104 5.798-3.312 9.062-2.208 3.264-5.549 6.799-10.02 10.604Z"
        />
      </g>
      <mask
        id="c"
        width={24}
        height={24}
        x={10}
        y={6}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}>
        <path fill="#D9D9D9" d="M10 6h24v24H10z" />
      </mask>
      <g mask="url(#c)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M18.49 26.291A8.764 8.764 0 0 0 22 27a8.764 8.764 0 0 0 3.51-.709 9.089 9.089 0 0 0 2.857-1.924 9.089 9.089 0 0 0 1.924-2.857A8.764 8.764 0 0 0 31 18a8.764 8.764 0 0 0-.709-3.51 9.089 9.089 0 0 0-1.924-2.857 9.09 9.09 0 0 0-2.857-1.924A8.764 8.764 0 0 0 22 9a8.764 8.764 0 0 0-3.51.709 9.09 9.09 0 0 0-2.857 1.924 9.089 9.089 0 0 0-1.924 2.857A8.762 8.762 0 0 0 13 18c0 1.245.236 2.415.709 3.51a9.089 9.089 0 0 0 1.924 2.857 9.089 9.089 0 0 0 2.857 1.924ZM23 23h-2v-4h-4v-2h4v-4h2v4h4v2h-4v4Z"
          clipRule="evenodd"
        />
      </g>
    </g>
    <defs>
      <filter
        id="a"
        width={42.667}
        height={49.333}
        x={0.667}
        y={0.333}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_12853_70797"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_12853_70797"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

