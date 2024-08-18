'use client'
import { RiCellphoneFill } from 'react-icons/ri'
import NavIcons from '../molecule/NavIcons'
import { FaCopyright, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

function Footer() {
  return (
    <div className="border-t-2 border-gray-100">
      <div className="container mx-auto md:flex md:justify-between px-2 py-4">
        <div className="flex-col md:flex md:flex-row">
          <div className="flex items-center mb-2">
            <FaCopyright className="mx-1" size={14} />
            <div className="text-xs">2024 Designed by Jeremiah</div>
          </div>
          <div className="flex items-center mb-2">
            <RiCellphoneFill className="mx-1" size={14} />
            <div className="text-xs">
              <Link href={'tel:+2346062290287'}>+2346062290287</Link>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mx-1" size={14} />
            <div className="text-xs">
              <Link href={'mailto:jerry4destinychild@yahoo.com'}>
                jerry4destinychild@yahoo.com
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <NavIcons />
        </div>
      </div>
    </div>
  )
}

export default Footer
