import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

interface ProjectProps {
  id?: string
  projectDate: string
  projectTitle: string
  projectDetails?: string
  projectTags: string
  projectLink: string
  projectPicture: string
}

function Project(props: ProjectProps) {
  let projectTags = props.projectTags?.split(',').filter((i) => i)

  return (
    <div className="mb-2">
      <div className="h-44 md:h-44 overflow-hidden">
        <Link href={`${props.projectLink}`}>
          <Image
            unoptimized //removes image optimizaion setup at next.config.mjs
            src={`${process.env.BASE_API_URL}/image/${props.projectPicture}`}
            alt=""
            width={100}
            height={100}
            className="w-full aspect-auto transition-all duration-300 rounded-lg cursor-pointer hover:grayscale-0"
          />
        </Link>
      </div>
      <div className="mt-2">{props.projectDate}</div>
      <div className="mt-1 font-semibold text-sm">
        <Link href={`${props.projectLink}`}>{props.projectTitle}</Link>
      </div>
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
