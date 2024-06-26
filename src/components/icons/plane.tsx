import React from 'react';

export default function PlaneIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none" {...props}>
      <g clipPath="url(#clip0_4008_27956)">
        <path
          d="M0.881521 3.55506L0.881521 4.53519L5.12855 7.66817C5.11558 8.49389 5.11664 9.32917 5.14271 10.1808C5.19022 11.1869 5.57994 12 6.0001 12C6.42012 12 6.80983 11.1869 6.85732 10.1808C6.88337 9.32917 6.88445 8.49387 6.87149 7.66817L11.1187 4.53517L11.1187 3.55505L6.80221 5.33298C6.74801 4.00806 6.68175 2.6952 6.63408 1.37486L7.94816 0.647227L7.94816 1.975e-05L6.0001 0.339837L4.05216 1.94094e-05L4.05216 0.647227L5.36593 1.37486C5.31844 2.6952 5.25234 4.00806 5.19781 5.33298L0.881521 3.55506Z"
          fill="currentColor"
        />
        <path
          d="M8.42615 7.02246L9.2207 7.02246L9.2207 5.68874L8.42615 5.68874L8.42615 7.02246Z"
          fill="currentColor"
        />
        <path
          d="M2.77918 7.02246L3.57373 7.02246L3.57373 5.68874L2.77918 5.68874L2.77918 7.02246Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_4008_27956">
          <rect width="12" height="12" fill="white" transform="translate(12 12) rotate(-180)" />
        </clipPath>
      </defs>
    </svg>
  );
}
