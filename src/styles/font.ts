import { Mynerve, Lexend, JetBrains_Mono } from 'next/font/google';

export const mynerve = Mynerve<'--font-mynerve'>({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-mynerve',
  display: 'swap',
});

export const lexend = Lexend<'--font-lexend'>({
  weight: ['200', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

export const jetbrains = JetBrains_Mono<'--font-jetbrains'>({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});
