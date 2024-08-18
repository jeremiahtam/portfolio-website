import Image from 'next/image'
import Project1 from '../../../public/09b23c232f2f199be886583009dcf98c.png'
import { useCallback, useEffect, useState } from 'react'

interface ProjectProps {
  id?: string
  projectDate: string
  projectTitle: string
  projectDetails?: string
  projectTags: string
  projectPicture: string
}

function Project(props: ProjectProps) {
  let projectTags = props.projectTags?.split(',').filter((i) => i)
  const [imageUrl, setImageUrl] = useState('')

  const fetchImage = async () => {
    try {
      const url = `${process.env.BASE_API_URL}/fetch-image/${props.projectPicture}`
      const res = await fetch(url)
      const val = await res.blob()
      var imgUrl = URL.createObjectURL(val)
      console.log(imgUrl)
      setImageUrl(imgUrl)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <div className="mb-2">
      <div className="h-44 md:h-44 overflow-hidden">
        <Image
          alt=""
          width={100}
          height={100}
          className="w-full aspect-auto transition-all duration-300 rounded-lg cursor-pointer hover:grayscale-0"
          src={imageUrl}
        />
      </div>
      <div className="mt-2">{props.projectDate}</div>
      <div className="mt-1 font-semibold text-sm">{props.projectTitle}</div>
      <div className="mt-3">{props.projectDetails}</div>
      <div className="flex flex-wrap text-red-500 align-middle mt-4">
        {projectTags.length > 0 &&
          projectTags.map((value, index) => {
            value = value.trim()
            return (
              <div key={index}>
                <a className="underline underline-offset-1 decoration-red-500">
                  {value}
                </a>
                {index < projectTags.length - 1 && (
                  <a className="h-5 w-1 border-r-red-500 border-r-[1px] mx-1"></a>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Project
