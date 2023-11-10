import "./Herocss2.css";

import React from 'react'

export default function Heroimage2(props) {
  return (
    <div className="hero-img">
          <div className="heading">
              <h1> {props.data.heading}</h1>
              <p>{props.data.text}</p>
      </div>
    </div>
  )
}
