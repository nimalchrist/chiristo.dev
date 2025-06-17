import './globals.scss';
import { jetbrains, lexend, mynerve } from './styles/font';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mynerve.variable} ${lexend.variable} ${jetbrains.variable}`}>
        {children}
      </body>
    </html>
  );
}
