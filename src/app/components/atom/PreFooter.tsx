'use client'
import { FaArrowRight } from 'react-icons/fa'

interface PrefooterProps {
  openModal: () => void
}
function PreFooter(props: PrefooterProps) {
  return (
    <>
      <div className="mb-28">
        <div className="container mx-auto px-6 md:px-16 lg:px-28">
          <div className="mb-2">Need a frontend developer ?</div>
          <div className="font-extrabold font-koulen text-4xl md:text-6xl flex align-middle">
            <div
              className="mr-2 md:mr-6 cursor-pointer"
              id="open-btn"
              onClick={props.openModal}
            >
              LET&apos;S WORK TOGETHER
            </div>
            <FaArrowRight id="open-btn" onClick={props.openModal} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PreFooter
