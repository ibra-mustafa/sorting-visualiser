import '@/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><nav className="grid grid-flow-row bg-grey-300 sm:row-span-2 row-span-3 w-screen grid grid-flow-row">
        <div className='flex items-center justify-center w-full'>
          <button>Merge Sort</button>
        </div>
        </nav>
      {children}</body>
    </html>
  )
}
