import { ThemeProvider } from 'next-themes';
import './globals.scss';
import { jetbrains, lexend, mynerve } from './styles/font';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${mynerve.variable} ${lexend.variable} ${jetbrains.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
