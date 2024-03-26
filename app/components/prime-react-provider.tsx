'use client';

import { PrimeReactProvider as Provider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PrimeReactProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Provider
      value={{
        unstyled: true,
        pt: Tailwind,
        ptOptions: {
          mergeSections: true,
          mergeProps: true,
          classNameMergeFunction: twMerge,
        },
      }}
    >
      {children}
    </Provider>
  );
}
