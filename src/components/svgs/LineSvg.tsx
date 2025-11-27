const LineSvg = () => {
  return (
    <div>
      <svg
        viewBox="0 0 255 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_190_52)">
          <path
            d="M19.0776 1.70891C19.0776 1.70891 -16.9224 144.209 63.0776 215.709C143.078 287.209 247.578 240.709 247.578 240.709"
            stroke="#756E2B"
            strokeWidth="14"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_190_52"
            x="0"
            y="0"
            width="254.417"
            height="270.57"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_190_52"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_190_52"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LineSvg;
