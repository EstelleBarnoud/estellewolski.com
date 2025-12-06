import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const skills = [
  {
    title: "Analytics Engineering & Data Pipelines",
    badges: [
      {
        name: "dbt",
        image: "/images/dbt.png",
      },
      {
        name: "Snowflake",
        image: "/images/snowflake.png",
      },
      {
        name: "BigQuery",
        image: "/images/bigquery.png",
      },
      {
        name: "Airflow",
        image: "/images/airflow.png",
      },
      {
        name: "Fivetran",
        image: "/images/fivetran.png",
      },
      {
        name: "Stitch",
        image: "/images/stitch.png",
      },
    ],
  },
  {
    title: "Programming",
    badges: [
      {
        name: "Python",
        image: "/images/python.png",
      },
      {
        name: "SQL",
        image: "/images/sql.png",
      },
    ],
  },
  {
    title: "DevOps",
    badges: [
      {
        name: "git",
        image: "/images/git.png",
      },
      {
        name: "GitHub Actions",
        image: "/images/github.png",
      },
      {
        name: "GitLab CI",
        image: "/images/gitlab.png",
      },
      {
        name: "Docker",
        image: "/images/docker.png",
      },
      {
        name: "Terraform",
        image: "/images/terraform.webp",
      },
    ],
  },
  {
    title: "Data Visualization & Analysis",
    badges: [
      {
        name: "Looker",
        image: "/images/looker.png",
      },
      {
        name: "Hex",
        image: "/images/hex.png",
      },
      {
        name: "Preset",
        image: "/images/preset.png",
      },
      {
        name: "Power BI",
        image: "/images/powerbi.png",
      },
      {
        name: "Tableau",
        image: "/images/tableau.png",
      },
      {
        name: "DOMO",
        image: "/images/domo.png",
      },
      {
        name: "Excel",
        image: "/images/excel.png",
      },
      {
        name: "VBA",
        image: "/images/vba.png",
      },
    ],
  },
  {
    title: "Data Sources",
    badges: [
      {
        name: "PostgreSQL",
        image: "/images/postgresql.png",
      },
      {
        name: "MongoDB",
        image: "/images/mongodb.png",
      },
      {
        name: "Pendo",
        image: "/images/pendo.jpeg",
      },
      {
        name: "Salesforce",
        image: "/images/salesforce.png",
      },
      {
        name: "HubSpot",
        image: "/images/hubspot.webp",
      },
      {
        name: "Zendesk",
        image: "/images/zendesk.png",
      },
      {
        name: "Google Analytics",
        image: "/images/google_analytics.webp",
      },
      {
        name: "Airtable",
        image: "/images/airtable.png",
      },
      {
        name: "...",
      },
    ],
  },
  {
    title: "Web Development",
    badges: [
      {
        name: "HTML",
        image: "/images/html.png",
      },
      {
        name: "CSS",
        image: "/images/css.webp",
      },
      {
        name: "Javascript",
        image: "/images/javascript.png",
      },
      {
        name: "React",
        image: "/images/react.png",
      },
    ],
  },
]

export function Skills() {

  return (

    <section className="px-4 pt-16 md:pt-32" id="skills">
      <h2 className="text-4xl text-black dark:text-white mb-8" >
        Skills
      </h2>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-14">
        { skills.map((skill, index) => (
          <div key={index}>
            <h3 className="text-xl text-black dark:text-white mb-4" >
              {skill.title}
            </h3>
            <div className="flex flex-wrap gap-2" >
              { skill.badges.map((badge, index) => (
                <Badge className={`m-1 ${!badge.image ? 'h-9 px-5 tracking-widest' : ''}`} key={index} variant="outline">
                  {badge.image && <Image className="m-2 rounded" src={badge.image} alt={`${badge.name} logo`} width={20} height={20} />}
                  {badge.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

  )

}
