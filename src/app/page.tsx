'use client'
import Header from './components/atom/Header'
import Footer from './components/atom/Footer'
import { FaArrowRight } from 'react-icons/fa'
import PreFooter from './components/atom/PreFooter'
import Project from './components/Project'
import { FunctionComponent, useEffect, useState } from 'react'
import FloatingNavigation from './components/FloatingNavigation'
import ContactModal from './components/ContactModal'
import Toast from './components/CustomToast'

interface Props {}
interface ProjectsDataProps {
  id: string
  projectDate: string
  projectTitle: string
  projectDetails: string
  projectTags: string
  projectLink: string
  projectPicture: string
}
const Home: FunctionComponent<Props> = (props) => {
  /** Modal control */
  const [openModal, setOpenModal] = useState(false)

  /** Toast */
  const [showToast, setShowToast] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  /** Projects data */
  const [projectsData, setProjectsData] = useState<[ProjectsDataProps] | []>([])
  useEffect(() => {
    getProjects()
  }, [])
  /** Get projects */
  const getProjects = async () => {
    try {
      let url = `${process.env.BASE_API_URL}/api/get-projects` as string
      const res = await fetch(url, {
        mode: 'cors',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const json = await res.json()
      if (!res.ok) {
        throw new Error(JSON.stringify(json))
      }
      setProjectsData(json.data)
      // console.log(json.data)
    } catch (error: any) {
      const jsonError = JSON.parse(error.message)
      if (jsonError.message) {
        setErrorMessage(jsonError.message)
        setShowToast(true)
        console.error(jsonError.message)
      } else {
        console.error(jsonError)
      }
    }
  }
  return (
    <div>
      <Header />
      <div className="py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-16 lg:px-28">
          <div className="my-2 md:my-4">Meet Jeremiah Esite 👋</div>
          <div className="font-extrabold font-koulen text-5xl md:text-7xl">
            Crafting digital experiences with{' '}
            <span className="text-orange-700">code</span> and{' '}
            <span className="text-orange-700">creativity</span>
          </div>
          <div className="my-8">
            I am Esite Jeremiah Tam a fullstack enthusiast.
          </div>
          <button
            className="flex text-xs items-center bg-black text-white p-4"
            onClick={() => setOpenModal(true)}
          >
            <div className="mr-2">Let&apos;s work together </div>
            <FaArrowRight />
          </button>
        </div>
        <div className="py-10 items-center">
          <div className="container mx-auto px-6 md:px-16 lg:px-28">
            {projectsData.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((data, index: number) => {
                  return (
                    <Project
                      key={index}
                      projectTags={data.projectTags}
                      projectPicture={data.projectPicture}
                      projectDate={data.projectDate}
                      projectLink={data.projectLink}
                      projectTitle={data.projectTitle}
                      projectDetails={data.projectDetails}
                    />
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      {showToast && (
        <Toast
          showToast={showToast}
          setShowToast={setShowToast}
          message={errorMessage}
          autoDisappear={true}
        />
      )}
      <PreFooter openModal={() => setOpenModal(true)} />
      <FloatingNavigation />
      <Footer />
      <ContactModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
      />
    </div>
  )
}
export default Home
