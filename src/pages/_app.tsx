import { SessionProvider } from 'next-auth/react';
import { Main, globalStyles } from '@/styles/globals';
import type { AppProps } from 'next/app';
import { Nunito_Sans } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: [],
  weight: ['400', '700'],
});

globalStyles();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Main className={nunito.className}>
        <Component {...pageProps} />
      </Main>
    </SessionProvider>
  );
}
