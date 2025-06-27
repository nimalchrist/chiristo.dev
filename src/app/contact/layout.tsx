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
        position="bottom-center"
        reverseOrder={false}
      />
    </section>
  );
}
