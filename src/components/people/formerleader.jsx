import React from 'react'
import "../../index.css";
import { Card } from "react-bootstrap";

import blankprofile from "../../assets/blankprofile.jpg"

export const FormerLeader = () => {
  return (
    <>
    <div className="px-4 py-8 pb-4 text-center">
          <p className="font-rubik db-textcolor display-5 fw-bold pt-3">
              Former Leadership
          </p>
            <div className="flex-wrap-center">
              <Card className="card-custom-former p-2 pb-4">
                <Card.Img className="p-3 rounded-circle mx-auto" style={{ width: "150px", height: "150px", objectFit: "cover" }} src={blankprofile}/> 
                <Card.Title className="fw-bold font-work">Dr. Markus Eger</Card.Title>
                <Card.Text className="font-work">
                  Former Co-Director (2021-2024) 
                  <br />
                  Contributed significantly to the lab's growth and development during tenure as Co-Director
                </Card.Text>
              </Card>
            </div>
          </div>
    </>
  )
}
