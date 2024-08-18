import Link from 'next/link'
import { BsTwitterX } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function NavIcons() {
  return (
    <>
      <Link href={'https://www.github.com/jeremiahtam'}>
        <FaGithub className="mx-1" size={18} />
      </Link>
      <Link href={'https://x.com/jeremiahtam'}>
        <BsTwitterX className="mx-1" size={18} />
      </Link>
      <Link href={'https://www.linkedin.com/in/esite-jeremiah/'}>
        <FaLinkedin className="mx-1" size={18} />
      </Link>
    </>
  )
}

export default NavIcons
