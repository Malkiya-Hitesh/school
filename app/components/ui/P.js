import React from 'react'

function P({ data, className }) {
  return (
    <p className={` ${className} text-[0.85rem] sm:text-[0.88rem] md:text-[0.93rem] lg:text-[1rem]  xl:text-[1.05rem]`}>{data}</p>

  )
}

export default P

