import React from 'react'

export const ContactUs = () => {
  return (

    <div className="bg-gray-100  min-h-screen">
    <div className=" sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
  
          <p className=" text-xl text-gray-600">
            Get in touch with us for any inquiries or assistance.
          </p>
        </div>
        <div className="mt-10 lg:max-w-full md:max-w-md mx-auto bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-2xl font-mono leading-6 text-gray-900">
              Contact Information
            </h3>
            <div className="mt-2 max-w-xl text-lg text-gray-500">
              <p>
                For any queries or assistance, feel free to contact us using
                the following details:
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-2xl font-mono text-gray-950">
                  Address
                </dt>
                <dd className="mt-1 text-lg text-gray-900">
                  IPS Academy, Rajendra Nagar, Indore, Madhya Pradesh, India
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-lg font-bold text-gray-500">
                  Contact Number
                </dt>
                <dd className="mt-1 text-lg text-gray-900">+91-1234567890</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-lg font-bold text-gray-500">Website</dt>
                <dd className="mt-1 text-lg text-gray-900">
                  <a
                    href="https://www.ipsacademy.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    www.ipsacademy.org
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-lg font-bold text-gray-500">Email</dt>
                <dd className="mt-1 text-lg text-gray-900">
                  <a
                    href="mailto:info@ipsacademy.org"
                    className="text-indigo-600 hover:text-indigo-500"
                  >
                    info@ipsacademy.org
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}