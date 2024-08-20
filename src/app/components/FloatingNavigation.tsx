import { useRouter, usePathname } from 'next/navigation'
import React from 'react'

const FloatingNavigation = () => {
  const router = useRouter()
  const pathName = usePathname()

  const navigateHandler = (location: string) => {
    if (pathName !== location) {
      router.push(location, { scroll: false })
    }
  }

  return (
    <div className="flex flex-row w-full align-middle justify-center relative">
      <div
        className="flex flex-row gap-2 p-1 align-middle justify-center
         bg-white w-56 border-gray-100 border-[1px] rounded-md bottom-36 md:bottom-20 fixed"
      >
        <button
          className="bg-white px-2 py-1 w-24 text-gray-800 font-bold text-sm border-gray-300
         border-[1px] rounded-md hover:bg-gray-200 disabled:bg-gray-200"
          disabled={pathName == '/'}
          onClick={() => navigateHandler('/')}
        >
          Portfolio
        </button>
        <a className="h-12 w-1 border-r-gray-500 border-r-[1px]"></a>
        <button
          className="bg-gray-800 px-2 py-1 w-24 text-white font-bold text-sm rounded-md
          hover:bg-gray-600 disabled:bg-gray-600"
          disabled={pathName == '/about'}
          onClick={() => navigateHandler('/about')}
        >
          About
        </button>
      </div>
    </div>
  )
}

export default FloatingNavigation
