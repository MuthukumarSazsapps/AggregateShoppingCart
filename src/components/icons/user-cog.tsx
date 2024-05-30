import React from 'react';

export default function UserCog({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20" {...props}>
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M10.08 17.39c.07 0 .13.05.13.12 0 .07-.06.13-.13.13H2.96a.92.92 0 0 1-.92-.92V15.5c0-.84.5-1.7 1.58-2.44 1.42-.97 3.76-1.64 6.46-1.64.07 0 .13.05.13.12 0 .07-.06.13-.13.13-2.53 0-4.84.6-6.31 1.6-.8.54-1.48 1.28-1.48 2.23v1.2a.67.67 0 0 0 .67.68h7.12Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.08 1.04a4.58 4.58 0 1 0 0 9.17 4.58 4.58 0 0 0 0-9.17Zm0 1.25a3.33 3.33 0 1 1 0 6.67 3.33 3.33 0 0 1 0-6.67ZM15.08 11.62a2.97 2.97 0 1 0 0 5.93 2.97 2.97 0 0 0 0-5.94Zm0 1.25a1.72 1.72 0 1 1 0 3.43 1.72 1.72 0 0 1 0-3.44Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.7 12.24v-1.4a.63.63 0 0 0-1.24 0v1.4a.63.63 0 0 0 1.25 0ZM17.18 13.37l1-1a.62.62 0 1 0-.89-.88l-1 1a.63.63 0 0 0 .9.88ZM17.43 15.2h1.4a.63.63 0 0 0 0-1.24h-1.4a.63.63 0 0 0 0 1.25ZM16.3 16.68l1 1a.62.62 0 1 0 .88-.89l-1-1a.63.63 0 0 0-.88.9ZM14.46 16.93v1.4a.63.63 0 0 0 1.25 0v-1.4a.63.63 0 0 0-1.25 0ZM12.98 15.8l-.99 1a.62.62 0 1 0 .88.88l1-1a.63.63 0 0 0-.89-.88ZM12.74 13.96h-1.4a.63.63 0 0 0 0 1.25h1.4a.62.62 0 1 0 0-1.25ZM13.87 12.48l-1-.99a.62.62 0 1 0-.88.88l1 1a.63.63 0 0 0 .88-.89Z"
        clipRule="evenodd"
      />
    </svg>
  );
}