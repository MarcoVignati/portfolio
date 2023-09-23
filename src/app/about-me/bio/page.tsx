'use client'

import React, { useRef, useState, useEffect } from "react";

export default function Bio() {

  const text: String = `I have 5 years of еxperience in web 
  development lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in

  Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat 
  nulla pariatur. Excepteur sint occaecat 
  officia deserunt mollit anim id est laborum.`

  let [height, setHeight] = useState(0);
  const elementRef: any = useRef(null);

  const getHight = () => {
    setHeight(elementRef.current.offsetHeight);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getHight()
    }, 100)
    return () => clearInterval(timer)
  }, [getHight])

  height += 42
  height /= 21

  const array = [];

  for (let i = 1; i <= height; i++) {
    array.push(i);
  }

  return (
    <section id="bio">
      <div className="bio_text_counter">
        {array.map(numero => {
          return (
            <li>{numero}</li>
          )
        })}
      </div>
      <div className="bio_text_wrapper">
        <p ref={elementRef} className="bio_text">{text}</p>
      </div>
    </section>
  )
}
