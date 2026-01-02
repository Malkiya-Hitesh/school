import React from 'react'

function H3({ data, className}) {
  return (
    <h3 className={` ${className} text-[1.28rem] sm:text-[1.33rem] md:text-[1.43rem] lg:text-[1.53rem] xl:text-[1.68rem]`}>
        {data}  
    </h3>
  )
}

export default H3
