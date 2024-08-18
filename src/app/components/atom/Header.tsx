'use client'
import NavIcons from '../molecule/NavIcons'
import { FunctionComponent } from 'react'
import Link from 'next/link'

interface Props {}

const Header: FunctionComponent<Props> = () => {
  return (
    <div className="border-b-2 border-gray-100">
      <div className="container mx-auto flex justify-between  px-2 py-4">
        <div>
          <Link href={'/'}>E. J. Tam (Full stack Developer)</Link>
        </div>
        <div className="flex flex-row">
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Header
