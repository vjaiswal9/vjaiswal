import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bliss Crafted — Celebrate Beyond Expectation',
  description: 'Premium event planning, design and production experiences by Bliss Crafted.',
  keywords: ['event planning','event design','weddings','corporate events','private celebrations','Bliss Crafted'],
  openGraph: {title:'Bliss Crafted — Celebrate Beyond Expectation',description:'Thoughtfully crafted celebrations in India and worldwide.',type:'website'}
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
