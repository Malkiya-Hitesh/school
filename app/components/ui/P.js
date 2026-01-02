import React from 'react'

function P({ data, className }) {
  return (
    <p className={` ${className} text-[0.90rem] sm:text-[0.93rem] md:text-[1rem] lg:text-[1.10rem]  xl:text-[1.15rem]`}>{data}</p>

  )
}

export default P

