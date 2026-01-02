import React from 'react'

function P({ data, className }) {
  return (
    <p className={` ${className} text-[0.8rem] sm:text-[0.84rem] md:text-[0.9rem] lg:text-[0.98rem]  xl:text-[1.02rem]`}>{data}</p>

  )
}

export default P
