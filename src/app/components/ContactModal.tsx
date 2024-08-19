import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import Footer from './atom/Footer'
import { Form, Formik, FormikHelpers, Field } from 'formik'
import * as Yup from 'yup'
import Toast from './Toast'

interface ContactModalProps {
  modalRef: React.MutableRefObject<HTMLDivElement>
}

interface FormValues {
  fullname: string
  email: string
  services: string
  message: string
}

const ContactModal = (props: ContactModalProps) => {
  const [showToast, setShowToast] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const sendEmail = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) => {
    try {
      const res = await fetch(`${process.env.BASE_API_URL}/api/contact-me`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const json = await res.json()

      if (!res.ok) {
        throw new Error(JSON.stringify(json))
      }
      console.log(json)
    } catch (error: any) {
      const jsonError = JSON.parse(error.message)
      if (jsonError.message) {
        setErrorMessage(jsonError.message)
        setShowToast(true)
        console.error(jsonError.message)
      } else {
        helpers.setErrors(jsonError.errors)
      }
    }
  }

  return (
    <div
      ref={props.modalRef}
      id="hs-medium-modal"
      className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="hs-medium-modal-label"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className="flex justify-end items-center py-3 px-4">
            <button
              type="button"
              className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-700 text-gray-100 hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-200 dark:hover:bg-neutral-100 dark:text-neutral-100 dark:focus:bg-neutral-100"
              aria-label="Close"
              data-hs-overlay="#hs-medium-modal"
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
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>

          <div className="p-4 overflow-y-auto">
            <div className="border-b-2 border-gray-100">
              <div className="container mx-auto py-6 px-6 lg:px-8">
                <div className="mb-7 text-red-500">Get in touch</div>
                <div className="mb-7 font-extrabold font-koulen text-5xl">
                  LET&apos;S WORK TOGETHER
                </div>
                <div className="text-sm">
                  Have a question, idea, or project you&apos;d like to
                  collaborate on? Or are you looking for a skilled frontend
                  developer to join your team? I&apos;d love to explore how I
                  can assist and contribute to your projects. Please feel free
                  to contact me at{' '}
                  <span className="text-red-500">contact@Je.dev</span> to
                  discuss potential opportunities
                </div>
              </div>
            </div>
            <div className="">
              <div className="container mx-auto p-6 lg:px-12">
                <Formik
                  enableReinitialize
                  initialValues={{
                    fullname: '',
                    email: '',
                    services: '',
                    message: '',
                  }}
                  validationSchema={Yup.object().shape({
                    fullname: Yup.string().required('Enter your full name'),
                    email: Yup.string()
                      .required('Enter your email')
                      .email('Invalid email'),
                    services: Yup.string().required(
                      'Enter service of interest',
                    ),
                    message: Yup.string().required('Enter your message'),
                  })}
                  onSubmit={(
                    values: FormValues,
                    helpers: FormikHelpers<FormValues>,
                  ) => {
                    sendEmail(values, helpers)
                    console.log(values)
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="my-8">
                        <label
                          htmlFor="fullname"
                          className="font-bold text-gray-600"
                        >
                          Name
                        </label>
                        <Field
                          type="text"
                          placeholder="Full Name"
                          id="fullname"
                          name="fullname"
                          className="form-input px-4 py-3 rounded-md w-full border-none bg-gray-100 text-gray-400 mt-4"
                        />

                        {errors.fullname && touched.fullname ? (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.fullname}
                          </div>
                        ) : null}
                      </div>

                      <div className="my-8">
                        <label
                          htmlFor="email"
                          className="font-bold text-gray-600"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          placeholder="Your email address"
                          id="email"
                          name="email"
                          className="mt-4 form-input px-4 py-3 rounded-md w-full border-none bg-gray-100 text-gray-400"
                        />
                        {errors.email && touched.email ? (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>

                      <div className="my-8">
                        <label
                          htmlFor="services"
                          className="font-bold text-gray-600"
                        >
                          Services
                        </label>
                        <Field
                          type="text"
                          placeholder="Interested Service"
                          id="services"
                          name="services"
                          className="mt-4 form-input px-4 py-3 rounded-md w-full border-none bg-gray-100 text-gray-400"
                        />
                        {errors.services && touched.services ? (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.services}
                          </div>
                        ) : null}
                      </div>
                      <div className="my-8">
                        <label
                          htmlFor="message"
                          className="font-bold text-gray-600"
                        >
                          Message
                        </label>
                        <Field
                          as="textarea"
                          placeholder="Message"
                          id="message"
                          name="message"
                          className="mt-4 form-input px-4 py-3 rounded-md w-full h-60 border-none bg-gray-100 text-gray-400"
                        ></Field>

                        {errors.message && touched.message ? (
                          <div className="text-red-500 text-sm mt-1">
                            {errors.message}
                          </div>
                        ) : null}
                      </div>
                      <button
                        type="submit"
                        className="flex items-center bg-black text-white rounded-md text-lg px-5 py-4 my-10"
                      >
                        <div className="mr-2">Send message </div>
                        <FaEnvelope />
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
            <Footer />
          </div>
          {showToast && (
            <Toast
              setShowToast={setShowToast}
              message={errorMessage}
              autoDisappear={true}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactModal
