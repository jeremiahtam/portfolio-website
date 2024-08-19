'use client'
import { FunctionComponent, useRef } from 'react'
import Header from '../components/atom/Header'
import Footer from '../components/atom/Footer'
import PreFooter from '../components/atom/PreFooter'
import Category from '../components/Category'
import Image from 'next/image'
import FloatingNavigation from '../components/FloatingNavigation'
import ContactModal from '../components/ContactModal'
import { useModalHook } from '../hooks/toggleModal'
import Link from 'next/link'

interface Props {}

const About: FunctionComponent<Props> = (props) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const { toggleModal } = useModalHook({ modalRef })

  return (
    <div>
      <Header />
      <div className="py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-28">
          <div className="text-2xl md:text-4xl font-inter">
            I am Esite Jeremiah Tam a full stack developer.
          </div>
          <div className="my-4 text-sm md:text-lg">
            I&apos;m Esite Jeremiah Tam, a full stack developer. I am a
            passionate and goal-driven freelance web and mobile app developer.
            My experience range from programming languages and frameworks in
            frontend and backend development. I have a good understanding of
            HTML, CSS, Bootstrap, TailwindCSS, PrelineCSS, JavaScript, jQuery,
            JSON, Next.js React.js, React Native, Redux, PHP, Laravel,
            Express.js, Node.js, Mongoose, MySQL, MongoDB, Git and GitHub.
          </div>
          <div className="text-red-500 text-sm mb-16">
            <Link href={'Jeremiah CV - Global - Tech.pdf'}>
              Download resume
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-6 my-16 md:px-40 lg:px-80">
          <div className="h-auto md:h-auto overflow-hidden">
            <Image
              unoptimized
              alt=""
              width={0}
              height={100}
              className="max-w-full aspect-auto w-full"
              src={'profilepic.jpeg'}
            />
          </div>
        </div>
        <div className="py-10 items-center">
          <div className="container mx-auto px-6 md:px-16 lg:px-28">
            <div className="grid grid-cols1 md:grid-cols-2 gap-6">
              <Category
                title="Development / Services"
                tags={['Development', 'Optimization', 'Design', 'Consulting']}
              />
              <Category
                title="Software"
                tags={[
                  'HTML',
                  'CSS',
                  'Bootstrap',
                  'TailwindCSS',
                  'ReactJs',
                  'Laravel API',
                  'MySQL',
                  'NodeJs',
                  'Redux',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <PreFooter toggleModal={toggleModal} />
      <FloatingNavigation />
      <Footer />
      <ContactModal modalRef={modalRef} />
    </div>
  )
}

export default About
