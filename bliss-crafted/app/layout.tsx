import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bliss Crafted — Celebrate Beyond Expectation',
  description: 'Premium event planning and experiences by Bliss Crafted.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}