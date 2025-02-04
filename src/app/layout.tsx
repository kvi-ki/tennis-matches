import type { Metadata } from 'next';
import './index.css';

export const metadata: Metadata = {
  title: 'Tennis matches'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <main id="root">{children}</main>
      </body>
    </html>
  );
}
