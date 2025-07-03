import { Toaster } from 'react-hot-toast';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      {children}
      <Toaster
        toastOptions={{
          style: {
            fontFamily: 'var(--font-lexend), sans-serif',
            fontSize: '1rem',
          },
        }}
        position="bottom-center"
        reverseOrder={false}
      />
    </section>
  );
}
