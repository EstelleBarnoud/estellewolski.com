import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function Skills() {

  return (

    <section className="mb-16" id="skills">
      <h2 className="text-4xl text-black dark:text-white mb-8" >
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl text-black dark:text-white mb-4" >
            Analytics Engineering &amp; Data Pipelines
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/dbt.png" alt="dbt logo" width={20} height={20} />
              dbt
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/bigquery.png" alt="BigQuery logo" width={20} height={20} />
              BigQuery
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/snowflake.png" alt="Snowflake logo" width={20} height={20} />
              Snowflake
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/airflow.png" alt="Airflow logo" width={20} height={20} />
              Airflow
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/fivetran.png" alt="Fivetran logo" width={20} height={20} />
              Fivetran
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/stitch.png" alt="Stitch logo" width={20} height={20} />
              Stitch
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-black dark:text-white mb-4" >
            Data Visualization &amp; Analysis
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/looker.png" alt="Looker logo" width={20} height={20} />
              Looker
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/powerbi.png" alt="PowerBI logo" width={20} height={20} />
              Power BI
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/tableau.png" alt="Tableau logo" width={20} height={20} />
              Tableau
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/domo.png" alt="DOMO logo" width={20} height={20} />
              DOMO
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/excel.png" alt="Excel logo" width={20} height={20} />
              Excel
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/vba.png" alt="VBA logo" width={20} height={20} />
              VBA
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-black dark:text-white mb-4" >
            Data Sources
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/postgresql.png" alt="PostgreSQL logo" width={20} height={20} />
              PostgreSQL
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/mongodb.png" alt="MongoDB logo" width={20} height={20} />
              MongoDB
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/salesforce.png" alt="Salesforce logo" width={20} height={20} />
              Salesforce
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/hubspot.webp" alt="HubSpot logo" width={20} height={20} />
              HubSpot
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/zendesk.png" alt="Zendesk logo" width={20} height={20} />
              Zendesk
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/pendo.jpeg" alt="Pendo logo" width={20} height={20} />
              Pendo
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/google_analytics.webp" alt="Google Analytics logo" width={20} height={20} />
              Google Analytics
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/airtable.png" alt="Airtable logo" width={20} height={20} />
              AirTable
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/pubsub.svg" alt="PubSub logo" width={20} height={20} />
              PubSub
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-black dark:text-white mb-4" >
            Programming
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/python.png" alt="Python logo" width={20} height={20} />
              Python
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/sql.png" alt="SQL logo" width={20} height={20} />
              SQL
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-black dark:text-white mb-4" >
            DevOps
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/git.png" alt="git logo" width={20} height={20} />
              git
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/github.png" alt="GitHub logo" width={20} height={20} />
              GitHub Actions
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/gitlab.png" alt="Gitlab logo" width={20} height={20} />
              GitLab CI
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/docker.png" alt="Docker logo" width={20} height={20} />
              Docker
            </Badge>
          </div>
        </div>
        <div>
          <h3 className="text-xl text-black dark:text-white mb-4" >
            Web Development
          </h3>
          <div className="flex flex-wrap gap-2" >
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/html.png" alt="HTML logo" width={20} height={20} />
              HTML
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/css.webp" alt="CSS logo" width={20} height={20} />
              CSS
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/javascript.png" alt="Javascript logo" width={20} height={20} />
              Javascript
            </Badge>
            <Badge className="m-1" variant="outline">
              <Image className="m-2 rounded" src="/images/react.png" alt="React logo" width={20} height={20} />
              React
            </Badge>
          </div>
        </div>
      </div>
    </section>

  )

}
