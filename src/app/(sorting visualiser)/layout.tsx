import '@/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><div className="bg-grey-300 sm:row-span-2 row-span-3 w-screen grid grid-flow-row">
        Nav{/* <NavButtons onAlgoChange={onAlgoChange} settings={setting} sort={sort}/> */}
      </div>
      {children}</body>
    </html>
  )
}
