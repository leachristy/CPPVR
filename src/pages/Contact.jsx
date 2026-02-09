import React from 'react'
import { Message } from '../components/contact/message'
import { Location } from '../components/contact/location'
import { Resources } from '../components/contact/resources'

export const Contact = () => {
  return (
     <>
        <div className="text-center p-2 mb-5">
            <p className="font-rubik display-2 fw-bold">Contact Us</p>
            <p className="font-work pb-3" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>Get in touch with the CPP Virtual Reality Lab</p>

            <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
            <Message />
            <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
            <Location />
            <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
            <Resources />
        </div>
    </>
  )
}
