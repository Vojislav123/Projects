import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Mars Rover Images',
  description: 'Randomly generated Mars Rover Images',
}

export default function marsImagesLayout({
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
  