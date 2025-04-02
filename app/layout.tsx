import type { Metadata } from 'next';
import StoreProvider from '@/store/StoreProvider';
import Header from '@/components/header/Header';
import BreadCrumbs from '@/components/breadCrumbs/BreadCrumbs';
import { ToastProvider } from '@/components/toastProvider/ToastProvider';
import '@/styles/global.scss';

export const metadata: Metadata = {
  title: 'Layout title',
  description: 'Layout description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ToastProvider>
            <Header />
            <main className="container">
              <BreadCrumbs />
              {children}
            </main>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
