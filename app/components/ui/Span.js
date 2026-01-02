

function Span({ data, className}) {
  return (
    <span className={`${className} text-[0.85rem] sm:text-[0.92rem] md:text-[1rem]  lg:text-[1.10rem] xl:text-[1.20rem]`}>
        {data}
    </span>
  )
}

export default Span
