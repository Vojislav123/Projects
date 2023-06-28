

import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Nasa EPIC',
  description: 'NASA EPIC',
}

export default function epicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className="mt-20">
        {children}
      </div>
  )
}
