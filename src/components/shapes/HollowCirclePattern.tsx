const HollowCirclePattern = () => {
  return (
    <div>
      <svg viewBox="0 0 313 329" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_250_3)">
          <path
            d="M309 160.5C309 249.142 240.723 321 156.5 321C72.2766 321 4 249.142 4 160.5C4 71.8583 72.2766 0 156.5 0C240.723 0 309 71.8583 309 160.5ZM72.8684 160.5C72.8684 209.111 110.312 248.519 156.5 248.519C202.688 248.519 240.132 209.111 240.132 160.5C240.132 111.889 202.688 72.4812 156.5 72.4812C110.312 72.4812 72.8684 111.889 72.8684 160.5Z"
            fill="#756E2B"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_250_3"
            x="0"
            y="0"
            width="313"
            height="329"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_250_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_250_3"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default HollowCirclePattern;
