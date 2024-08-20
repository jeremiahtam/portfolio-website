'use client'
import React, { useEffect } from 'react'
import { CustomFlowbiteTheme, Toast } from 'flowbite-react'

const toastTheme: CustomFlowbiteTheme['toast'] = {
  root: {
    base: 'flex fixed top-[20vh] right-[20vh] w-full max-w-xs items-center rounded-lg bg-white border-gray-200 border-[1px] p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
    closed: 'opacity-0 ease-out',
  },
  toggle: {
    base: '-m-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
    icon: 'h-5 w-5 shrink-0',
  },
}
interface ToastProps {
  setShowToast(arg: boolean): any
  message: string
  autoDisappear: boolean
  showToast: boolean
}

const CustomToast = (props: ToastProps) => {
  useEffect(() => {
    removeToast()
  }, [])

  const removeToast = () => {
    setTimeout(() => {
      props.setShowToast(false)
    }, 8000)
  }

  return (
    <Toast className="top-10 right-10" theme={toastTheme}>
      <div className="ml-3 text-sm font-normal">{props.message}</div>
      <Toast.Toggle onDismiss={() => props.setShowToast(!props.showToast)} />
    </Toast>
  )
}

export default CustomToast
