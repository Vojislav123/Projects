

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Nasa Images Galery',
  description: 'Search Nasa galery',
}


export default function galeryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>

          {children}

        </div>
    )
  }
  