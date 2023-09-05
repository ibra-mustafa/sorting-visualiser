import '@/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><nav className="grid grid-flow-row bg-grey-300 sm:row-span-2 row-span-3 w-screen grid grid-flow-row">
        <div className='p-4 gap-4 flex items-center justify-center w-full'>
          <button className='border border-teal-100 p-2 '>Merge Sort</button>
          <button className='border border-teal-100 p-2 '>Insertion Sort</button>
          <button className='underline border border-teal-100 p-2 '>Sort !</button>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor='itemsAmount'>Array Length: 25</label>
          <input defaultValue={25} min={1} type="range" name='itemsAmount' id='itemsAmount' className='w-full max-w-xl'  />
         <label htmlFor="range">Delay: 15</label>
          <input defaultValue={15} min={3} type="range" name='delay' id='delay'  className='w-full max-w-xl' />
        </div>
        </nav>
      {children}</body>
    </html>
  )
}
