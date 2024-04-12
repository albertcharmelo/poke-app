'use client';
import { SWRConfig } from 'swr';
import { ReactNode } from 'react';

const swrConfiguration = {
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateOnMount: true,
  shouldRetryOnError: false,
};

export const SWRProvider = ({ children }: { children: ReactNode }) => {
  return <SWRConfig value={swrConfiguration}>{children}</SWRConfig>;
};
