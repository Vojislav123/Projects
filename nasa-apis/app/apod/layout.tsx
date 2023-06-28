

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Photo of the day',
  description: 'Nasa photo of the day',
}


export default function apodLayout({
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
  