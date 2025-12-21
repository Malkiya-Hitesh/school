import { Lilita_One, Baloo_2, Bebas_Neue, Anton, Luckiest_Guy } from "next/font/google"

const lilita = Lilita_One({ subsets: ["latin"], weight: "400" })
const baloo = Baloo_2({ subsets: ["latin"], weight: "700" })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" })
const anton = Anton({ subsets: ["latin"], weight: "400" })
const lucky = Luckiest_Guy({ subsets: ["latin"], weight: "400" })

export default function FontTest() {
  return (
    <div className="space-y-8 p-10 text-5xl">
      <h1 className={lilita.className}>Gnana Gangothri Vidyalaya</h1>
      <h1 className={baloo.className}>Gnana Gangothri Vidyalaya</h1>
      <h1 className={bebas.className}>Gnana Gangothri Vidyalaya</h1>
      <h1 className={anton.className}>Gnana Gangothri Vidyalaya</h1>
      <h1 className={lucky.className}>Luckiest Guy – Kids Fun</h1>
    </div>
  )
}
