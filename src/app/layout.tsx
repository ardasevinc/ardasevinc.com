import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'Arda Sevinc',
  description: "Arda Sevinc's Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <a rel="me" href="https://tilde.zone/@ardasevinc" className="invisible">Mastodon</a>
      </body>
    </html>
  );
}
