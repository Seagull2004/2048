import { BannerSection } from "@/components/Banner";

export default function Parallax()
{
  return (
    <div>
      <section className="flex justify-center items-center bg-gray-700 bg-parallax-2 bg-cover bg-fixed h-96 font-extrabold text-4xl">
        Section 1
      </section>
      <section className="flex justify-center items-center bg-green-700 bg-parallax-2 bg-cover bg-fixed h-96 font-extrabold text-4xl">
        Section 2
      </section>
      <section className="flex justify-center items-center bg-blue-700 h-96 font-extrabold text-4xl">
        Section 3
      </section>
      <BannerSection/>
      <section className="flex justify-center items-center bg-red-700 h-96 font-extrabold text-4xl">
        Section 4
      </section>
      <section className="flex justify-center items-center bg-orange-700 h-96 font-extrabold text-4xl">
        Section 5
      </section>
      <section className="flex justify-center items-center bg-cyan-700 h-96 font-extrabold text-4xl">
        Section 6
      </section>
    </div>
  )
}
