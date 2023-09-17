import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export function Skills() {

  return (

    <section className="mb-16" id="skills">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-8" >
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4" >
            Programming
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2" src="/images/python.png" alt="Python logo" width={20} height={20} />
              Python
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/sql.png" alt="Python logo" width={20} height={20} />
              SQL
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4" >
            Analytics engineering &amp; data pipelines
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge variant="outline">
              <Image className="m-2" src="/images/dbt.png" alt="dbt logo" width={20} height={20} />
              dbt
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/bigquery.png" alt="BigQuery logo" width={20} height={20} />
              BigQuery
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/snowflake.png" alt="Snowflake logo" width={20} height={20} />
              Snowflake
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/airflow.png" alt="Airflow logo" width={20} height={20} />
              Airflow
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/fivetran.png" alt="Fivetran logo" width={20} height={20} />
              Fivetran
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/stitch.png" alt="Stitch logo" width={20} height={20} />
              Stitch
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4" >
            DevOps
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge variant="outline">
              <Image className="m-2" src="/images/git.png" alt="git logo" width={20} height={20} />
              git
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/github.png" alt="GitHub logo" width={20} height={20} />
              GitHub Actions
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/gitlab.png" alt="Gitlab logo" width={20} height={20} />
              GitLab CI
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/docker.png" alt="Docker logo" width={20} height={20} />
              Docker
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4" >
            Data Visualization &amp; Analysis
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge variant="outline">
              <Image className="m-2" src="/images/looker.png" alt="Looker logo" width={20} height={20} />
              Looker
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/powerbi.png" alt="PowerBI logo" width={20} height={20} />
              Power BI
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/tableau.png" alt="Tableau logo" width={20} height={20} />
              Tableau
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/domo.png" alt="DOMO logo" width={20} height={20} />
              DOMO
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/excel.png" alt="Excel logo" width={20} height={20} />
              Excel
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/vba.png" alt="VBA logo" width={20} height={20} />
              VBA
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4" >
            Data sourcing (databases, events &amp; SaaS)
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge variant="outline">
              <Image className="m-2" src="/images/postgresql.png" alt="PostgreSQL logo" width={20} height={20} />
              PostgreSQL
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/mongodb.png" alt="MongoDB logo" width={20} height={20} />
              MongoDB
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/salesforce.png" alt="Salesforce logo" width={20} height={20} />
              Salesforce
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/hubspot.webp" alt="HubSpot logo" width={20} height={20} />
              HubSpot
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/zendesk.png" alt="Zendesk logo" width={20} height={20} />
              Zendesk
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/pendo.jpeg" alt="Pendo logo" width={20} height={20} />
              Pendo
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/google_analytics.webp" alt="Google Analytics logo" width={20} height={20} />
              Google Analytics
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/airtable.png" alt="Airtable logo" width={20} height={20} />
              AirTable
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/pubsub.svg" alt="PubSub logo" width={20} height={20} />
              PubSub
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4" >
            Web Development (side projects)
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge variant="outline">
              <Image className="m-2" src="/images/html.png" alt="HTML logo" width={20} height={20} />
              HTML
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/css.webp" alt="CSS logo" width={20} height={20} />
              CSS
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/javascript.png" alt="Javascript logo" width={20} height={20} />
              Javascript
            </Badge>
            <Badge variant="outline">
              <Image className="m-2" src="/images/react.png" alt="React logo" width={20} height={20} />
              React
            </Badge>
          </div>
        </div>
      </div>
    </section>

  )

}
