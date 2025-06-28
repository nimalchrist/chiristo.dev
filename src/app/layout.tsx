import { ThemeProvider } from 'next-themes';
import './globals.scss';
import { jetbrains, lexend, mynerve } from '../styles/font';
import HeaderSection from '@/sections/HeaderSection/HeaderSection';

export const metadata = {
  title: 'Chiristo.dev | Portfolio and Blogs',
  description: 'Software Engineer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="system"
      suppressHydrationWarning
    >
      <body className={`${mynerve.variable} ${lexend.variable} ${jetbrains.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <HeaderSection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
