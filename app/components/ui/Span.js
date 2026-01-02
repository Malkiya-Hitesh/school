

function Span({ data, className}) {
  return (
    <span className={`${className} text-[0.90rem] sm:text-[0.95rem] md:text-[1.05rem]  lg:text-[1.18rem] xl:text-[1.25rem]`}>
        {data}
    </span>
  )
}

export default Span
