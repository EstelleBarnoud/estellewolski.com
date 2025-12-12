"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobs = [
  {
    company: "Vercel",
    image: 'vercel.jpeg',
    logo: '/images/vercel-logo.webp',
    isPartTime: false,
    positions: [
      { title: "Senior Analytics Engineering Manager", period: "Nov 2024 - Present" },
      { title: "Analytics Engineering Manager", period: "Jul 2024 - Nov 2024" },
      { title: "Senior Analytics Engineer", period: "Jul 2023 - Aug 2024" },
    ],
    description: [
        "Built and scaled team of 5 analytics engineers delivering foundational models across Product, Sales, Finance, and Customer Success while maintaining 100% platform stability during critical transition",
        "Reduced technical debt by 40%+ and implemented automated CI/CD workflows that cut deployment time from days to minutes",
        "Established IPO-ready data security infrastructure with automated permission management and modern BI tooling, while authoring comprehensive guides that scaled team autonomy",
      ]
  },
  {
    company: "dbt Labs",
    image: 'dbt-labs.png',
    logo: '/images/dbt-logo.png',
    isPartTime: false,
    positions: [
      { title: "Senior Analytics Engineer", period: "Oct 2022 - May 2023" },
    ],
    description: [
        "Led end-to-end data modeling projects from extraction, load & transformation to self-service",
        "Reduced CI time from 1h+ to <2min through the implementation of a deploy job & model config optimization",
        "Reduced number of incidents & review time through custom CI & hooks ensuring code quality on all contributions",
      ]
  },
  {
    company: "Gojob",
    image: 'gojob.png',
    logo: '/images/gojob-logo.jpeg',
    isPartTime: false,
    positions: [
      { title: "Senior Analytics Engineer | Data Engineer", period: "Jan 2022 - Jul 2022" },
      { title: "Analytics Engineer | Data Engineer", period: "Mar 2021 - Jan 2022" },
    ],
    description: [
        "Reduced number of customer escalations from 20 to 2 per month by migrating data models from old stack (Airflow, DOMO) to new (dbt, BigQuery, Fivetran)",
        "Cut number of incidents by half by setting up automatic tests both on a daily basis to proactively fix data quality issues and on code changes for continuous integration",
        "Increased analytics team impact by setting up a technical roadmap, recruiting 4 engineers, producing self-service documentation and upskilling via code reviews & mentoring",
      ]
  },
  {
    company: "L'Oréal",
    subtitle: "Revenue Growth Management – Advanced Analytics",
    image: 'loreal.png',
    logo: '/images/loreal-logo.png',
    isPartTime: false,
    positions: [
      { title: "Data Scientist & Analyst", period: "Feb 2020 - Dec 2020" },
    ],
    description: [
      "Saved $10M+ in portfolio & pricing optimization by designing hierarchical Bayes estimation with choice-based conjoint research to understand customer behavior",
      "Used Machine Learning to provide quantitative & qualitative recommendations based on customer insight",
      "Optimized research designing from 5 days to 1 through the automation of processes",
    ]
  },
  {
    company: "CybelAngel",
    image: 'cybelangel.png',
    logo: '/images/cybelangel-logo.png',
    isPartTime: false,
    positions: [
      { title: "Business Analyst", period: "May 2019 - Feb 2020" },
    ],
    description: [
      "Prepared business data & slides for pitch deck to raise $36M in series B round",
      "Analyzed & forecast marketing and sales performance to recommend data-driven strategies",
      "Worked cross-teams on systematic tracking of KPIs; optimized sales & marketing processes",
    ],
  },
  {
    company: "Bill & Melinda Gates Foundation",
    subtitle: "Columbia University Program",
    image: 'bill-melinda-gates-foundation.jpg',
    logo: '/images/gates-foundation-logo.jpg',
    isPartTime: true,
    positions: [
      { title: "Data Science Consultant", period: "Sep 2018 - May 2019" },
    ],
    description: [
      "Applied statistical machine learning models to build linguistic glossaries",
      "Implemented recurrent neural network to translate languages with limited data",
    ],
  }
]

function FlipCard({ job, index }: { job: typeof jobs[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const latestPosition = job.positions[0]

  return (
    <div 
      className="perspective-1000 h-[420px] cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <Card className="absolute inset-0 backface-hidden overflow-hidden group">
          <div className="relative h-52 overflow-hidden">
            {job.isPartTime && (
              <div className={`absolute top-3 right-3 z-10 transition-opacity duration-200 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 shadow-md backdrop-blur-sm ring-1 ring-slate-200/50 dark:ring-slate-700/50">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Part Time
                </span>
              </div>
            )}
            <Image 
              className="object-cover transition-transform duration-500 group-hover:scale-105" 
              src={`/images/${job.image}`} 
              alt={`${job.company} banner`} 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          
          <CardHeader className="pt-5 pb-3">
            <CardTitle className="text-xl font-bold leading-tight">
              {job.company}
            </CardTitle>
            {job.subtitle && (
              <CardDescription className="text-xs text-gray-500 dark:text-gray-400">
                {job.subtitle}
              </CardDescription>
            )}
          </CardHeader>

          {/* Career Timeline on Front */}
          <div className="px-6 pb-5">
            <div className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-2.5">
              {job.positions.map((position, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-card ${
                    i === 0 
                      ? 'bg-emerald-500 dark:bg-emerald-400' 
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`} />
                  <div>
                    <p className={`text-sm font-medium leading-tight ${
                      i === 0 
                        ? 'text-slate-900 dark:text-white' 
                        : 'text-slate-500 dark:text-slate-400'
                    }`}>{position.title}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{position.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flip indicator */}
          <div className="absolute bottom-3 right-3 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </Card>

        {/* Back of card */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-850 dark:to-slate-800" />
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image 
                    src={job.logo} 
                    alt={`${job.company} logo`} 
                    width={48} 
                    height={48}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-lg font-bold text-slate-900 dark:text-white">
                    {job.company}
                  </CardTitle>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {latestPosition.title}
                  </p>
                </div>
              </div>
            </CardHeader>

            {/* Key Achievements */}
            <div className="flex-1 px-6 py-4 overflow-y-auto">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-3">Key Achievements</p>
              <ul className="space-y-3">
                {job.description.map((desc, i) => (
                  <li 
                    key={i} 
                    className="flex gap-2.5"
                    style={{
                      animation: isFlipped ? `fadeSlideIn 0.3s ease-out ${i * 0.1}s both` : 'none'
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 flex-shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Flip back indicator */}
            <div className="absolute bottom-3 right-3 text-slate-300 dark:text-slate-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export function Work() {
  return (
    <section className="px-4 pt-32 mb-16 md:mb-32" id="work">
      <h2 className="text-4xl text-black dark:text-white mb-8">
        Work experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <FlipCard key={index} job={job} index={index} />
        ))}
      </div>
    </section>
  )
}
