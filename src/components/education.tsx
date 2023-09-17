import Image from "next/image"

export function Education() {

  return (

    <section className="mb-16" id="education">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-8" >
        Education
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" >
        <div className="flex items-center" >
          <Image
            alt="Columbia University Logo"
            className="w-24 h-24 object-cover rounded-lg"
            height="100"
            src="/images/columbia.jpeg"
            width="100"
          />
          <div>
            <h4 className="text-lg text-black dark:text-white ml-4" >
              Columbia University
            </h4>
            <p className="ml-4 text-gray-600 dark:text-gray-400" >
              Master of Science, Management Science & Engineering
            </p>
          </div>
        </div>
        <div className="flex items-center" >
          <Image
            alt="Télécom Paris Logo"
            className="w-24 h-24 object-cover rounded-lg"
            height="100"
            src="/images/telecom.webp"
            width="100"
          />
          <div>
            <h4 className="text-lg text-black dark:text-white ml-4" >
              Télécom Paris - <span className="font-extralight">Institut Polytechnique de Paris</span>
            </h4>
            <p className="ml-4 text-gray-600 dark:text-gray-400" >
              Master of Science (Diplôme d’ingénieur), Data Science
            </p>
          </div>
        </div>
      </div>
    </section>

  )

}