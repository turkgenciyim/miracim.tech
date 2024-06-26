import './globals.css';
import {DM_Sans} from 'next/font/google';

const dmSans = DM_Sans ({
  subsets: ['latin'],
  display: 'auto',
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Developer? but insurance person',
};

export default function RootLayout({children}) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}

