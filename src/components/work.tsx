import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

const jobs = [
  {
    title: "Senior Analytics Engineer",
    company: "Vercel",
    image: 'vercel.jpeg',
    description: [
        "Build and maintain reliable, timely data assets at scale through modern data stack",
        "Enable data-driven decisions through self-service analytics",
        "Improve toolkit & processes to reduce time-to-deploy and maximize data integrity",
      ]
  },
  {
    title: "Senior Analytics Engineer",
    company: "dbt Labs",
    image: 'dbt-labs.png',
    description: [
        "Led end-to-end data modeling projects from extraction, load & transformation to self-service. Maintained 1000+ models across 30+ sources for self-service",
        "Reduced CI time from 1h+ to <2min through the implementation of a deploy job & model config optimization",
        "Reduced number of incidents & review time through custom CI & hooks ensuring code quality on all contributions",
      ]
  },
  {
    title: "Senior Analytics Engineer, Data Engineer",
    company: "Gojob",
    image: 'gojob.png',
    description: [
        "Reduced number of customer escalations from 20 to 2 per month by migrating data models from old stack (Airflow, DOMO) to new (dbt, BigQuery, Fivetran)",
        "Cut number of incidents by half by setting up automatic tests both on a daily basis to proactively fix data quality issues and on code changes for continuous integration",
        "Increased analytics team impact by setting up a technical roadmap, recruiting 4 engineers, producing self-service documentation and upskilling via code reviews & mentoring",
        "Served on-call rotations on 10+ data sources & 150+ models",
      ]
  },
  {
    title: "Data Scientist & Analyst, Revenue Growth Management – Advanced Analytics",
    company: "L’Oréal",
    image: 'loreal.png',
    description: [
      "Saved $10M+ in portfolio & pricing optimization by designing hierarchical Bayes estimation with choice-based conjoint research to understand customer behavior",
      "Used Machine Learning to provide quantitative & qualitative recommendations based on customer insight",
      "Optimized research designing from 5 days to 1 through the automation of processes",
    ]
  },
  {
    title: "Business Analyst",
    company: "CybelAngel",
    image: 'cybelangel.png',
    description: [
      "Prepared business data & slides for pitch deck to raise $36M in series B round",
      "Analyzed & forecast marketing and sales performance to recommend data-driven strategies",
      "Worked cross-teams on systematic tracking of KPIs; optimized sales & marketing processes",
    ],
  },
  {
    title: "Data Science Consultant",
    company: "Bill & Melinda Gates Foundation",
    image: 'bill-melinda-gates-foundation.jpg',
    description: [
      "Applied statistical machine learning models to build linguistic glossaries",
      "Implemented recurrent neural network to translate languages with limited data",
    ],
  }
]

export function Work() {
  return (

    <section className="px-4 pt-32 mb-32" id="work">
      <h2 className="text-4xl text-black dark:text-white mb-8" >
        Work experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <Card key={index} className="group transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
            <div className="max-h-64 overflow-hidden flex items-center">
              <Image className="w-full h-0" src={`/images/${job.image}`} alt={`${job.company} banner`} width={200} height={200} layout="responsive" objectFit="cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg font-semibold group-hover:text-gray-800 dark:group-hover:text-gray-200">
                {job.title}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-400">
                {job.company}
              </CardDescription>
            </CardHeader>
            <CardDescription className="hidden group hover:block transition-opacity duration-300 mt-2 w-1/2 h-20 bg-blue-500">
              <div className="hidden group-hover:block transition-opacity duration-300">
                <ul className="text-sm list-disc list-inside mb-4">
                  {job.description.map((description, index) => (
                    <li key={index} className="px-6">{description}</li>
                  ))}
                </ul>
              </div>
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>

  )
}
