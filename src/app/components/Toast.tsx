import React, { useEffect } from 'react'

interface Toast {
  setShowToast(arg: boolean): any
  message: string
  autoDisappear: boolean
}

const Toast = (props: Toast) => {
  useEffect(() => {
    removeToast()
  }, [])

  const removeToast = () => {
    setTimeout(() => {
      props.setShowToast(false)
      console.log('Logs every minute')
    }, 8000)
  }

  return (
    <div
      className="max-w-xs bg-red-100 fixed top-[20vh] right-[20vh]
      border border-red-200 text-sm text-red-800 rounded-lg dark:bg-red-800/10 dark:border-red-900 dark:text-red-500"
      role="alert"
      tabIndex={-1}
      aria-labelledby="hs-toast-soft-color-red-label"
    >
      <div id="hs-toast-soft-color-red-label" className="flex p-4">
        {props.message}
        <div className="ms-auto">
          <button
            type="button"
            onClick={() => props.setShowToast(false)}
            className="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-red-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-red-200"
            aria-label="Close"
            data-hs-remove-element="#hs-toast-soft-color-red-label"
          >
            <span className="sr-only">Close</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toast
