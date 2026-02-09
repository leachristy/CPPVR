import React from 'react'
import { Hardware } from '../components/technology/hardware'
import { DevTools } from '../components/technology/devtools'
import { Modeling } from '../components/technology/modeling'
import { Programming } from '../components/technology/programming'
import { Labcapabilities } from '../components/technology/labcapabilities'

export const Technology = () => {
  return (
    <>
    <div className="text-center p-2 mb-5">
        <p className="font-rubik display-2 fw-bold">Our Technology</p>
        <p className="font-work pb-3" style={{ fontSize: "1.5rem", lineHeight: "1.2", letterSpacing: "0.05em" }}>Cutting-edge VR/AR hardware and software platforms</p>
        
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <Hardware />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <DevTools />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <Modeling />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <Programming />
        <hr className="border-t-2 border-gray-300 my-6 w-1/2 mx-auto" />
        <Labcapabilities />
    </div>
    </>
  )
}
