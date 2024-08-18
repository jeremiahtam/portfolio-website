import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        alt=""
        width={120}
        height={120}
        className="aspect-auto transition-all duration-300"
        src={'/favicon.ico'}
      />
    </div>
  )
}

export default loading
