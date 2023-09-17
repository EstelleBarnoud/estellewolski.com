import Image from "next/image"
import { Fragment } from "react"

const education = [
  {
    logo: "/images/columbia.jpeg",
    name: <Fragment>Columbia University</Fragment>,
    degree: "Master of Science, Management Science & Engineering",
    alt: "Columbia University Logo"
  },
  {
    logo: "/images/telecom.webp",
    name: <Fragment>Télécom Paris - <span className="font-extralight">
      Institut Polytechnique de Paris
    </span></Fragment>,
    degree: "Master of Science (Diplôme d'ingénieur), Data Science",
    alt: "Télécom Paris Logo"
  },
]

export function Education() {

  return (

    <section className="px-4 mt-32 mb-32" id="education">
      <h2 className="text-4xl text-black dark:text-white mb-8" >
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" >
        {education.map((school, index) => (
          <div className="flex items-center" key={index} >
            <Image
              alt={school.alt}
              className="w-24 h-24 object-cover rounded-lg"
              height="100"
              src={school.logo}
              width="100"
            />
            <div>
              <h4 className="text-lg text-black dark:text-white ml-4" >
                {school.name}
              </h4>
              <p className="ml-4 text-gray-600 dark:text-gray-400" >
                {school.degree}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

  )

}