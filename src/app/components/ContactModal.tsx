import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import Footer from './atom/Footer'
import { Form, Formik, FormikHelpers, Field } from 'formik'
import * as Yup from 'yup'
import { CustomFlowbiteTheme, Modal } from 'flowbite-react'
import CustomToast from './CustomToast'

const modalTheme: CustomFlowbiteTheme['modal'] = {
  content: {
    base: 'relative h-full w-full p-4 md:h-auto',
    inner:
      'relative flex flex-col max-h-auto rounded-lg bg-white shadow dark:bg-gray-700',
  },
  header: {
    base: 'flex items-start justify-between rounded-t  p-5',
    close: {
      base: 'ml-auto inline-flex items-center rounded-full bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
      icon: 'h-5 w-5',
    },
  },
}
interface ContactModalProps {
  openModal: boolean
  setOpenModal: () => void
  // modalRef: React.MutableRefObject<HTMLDivElement>
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
          'Content-Type': 'application/json',
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
    <Modal
      dismissible
      show={props.openModal}
      size={'4xl'}
      onClose={props.setOpenModal}
      className=""
      theme={modalTheme}
      position={'top-center'}
    >
      <Modal.Header />
      <Modal.Body className="!overflow-visible">
        <div className="overflow-y-auto">
          <div className="border-b-2 border-gray-100">
            <div className="container mx-auto py-6 px-6 lg:px-8">
              <div className="mb-7 text-red-500">Get in touch</div>
              <div className="mb-7 font-extrabold font-koulen text-5xl">
                LET&apos;S WORK TOGETHER
              </div>
              <div className="text-sm">
                Have a question, idea, or project you&apos;d like to collaborate
                on? Or are you looking for a skilled frontend developer to join
                your team? I&apos;d love to explore how I can assist and
                contribute to your projects. Please feel free to contact me at{' '}
                <span className="text-red-500">contact@Je.dev</span> to discuss
                potential opportunities
              </div>
            </div>
          </div>
          <div className="">
            <div className="container mx-auto px-6 lg:px-8">
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
                  services: Yup.string().required('Enter service of interest'),
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
        </div>
        {showToast && (
          <CustomToast
            showToast={showToast}
            setShowToast={setShowToast}
            message={errorMessage}
            autoDisappear={true}
          />
        )}
      </Modal.Body>
      <Footer />
    </Modal>
  )
}

export default ContactModal
