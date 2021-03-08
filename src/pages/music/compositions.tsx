import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/Layout"
import SoundCloud from "../../components/soundcloud"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../../tailwind.config"

const tailwind = resolveConfig(tailwindConfig)

export const pageQuery = graphql`
  query CompositionsPageQuery {
    contentJson {
      compositions {
        title
        year
        description
        instrumentation
        soundcloud
      }
      arrangements {
        title
        original
        description
        instrumentation
      }
    }
  }
`

type Data = {
  contentJson: {
    compositions: {
      title: string
      year?: number
      description: string
      instrumentation: string[]
      soundcloud?: string
    }[]
    arrangements: {
      title: string
      year?: number
      original?: string
      description: string
      instrumentation: string[]
      soundcloud?: string
    }[]
  }
}

const CompositionsPage: FC<PageProps<Data>> = ({ data }) => {
  const { compositions, arrangements } = data.contentJson

  return (
    <Layout>
      <div className="flex flex-col mt-1">
        <div className="w-2/3 mx-auto">
          <h3 className="text-4xl mb-2">Compositions</h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {compositions.map(
              ({ title, year, description, instrumentation, soundcloud }) => (
                <div className="pt-2 flex flex-col">
                  <h2 className="text-2xl">
                    {title} ({year ?? "TBF"})
                  </h2>
                  <p>{description}</p>
                  <p className="font-semibold">Instrumentation:</p>
                  <ul className="list-disc list-inside">
                    {instrumentation.map(el => (
                      <li>{el}</li>
                    ))}
                  </ul>
                  <div className="flex-grow" />
                  {soundcloud && (
                    <SoundCloud
                      url={soundcloud}
                      colour={tailwind.theme.backgroundColor.red["500"]}
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <hr className="my-4" />

        <div className="w-2/3 mx-auto">
          <h3 className="text-4xl mb-2">Arrangements</h3>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {arrangements.map(
              ({
                title,
                year,
                original,
                description,
                instrumentation,
                soundcloud,
              }) => (
                <div className="pt-2 flex flex-col">
                  <h2 className="text-2xl">
                    {title} ({year ?? "TBF"})
                  </h2>
                  <h4 className="text-xl italic">{original}</h4>
                  <p>{description}</p>
                  <p className="font-semibold">Instrumentation:</p>
                  <ul className="list-disc list-inside">
                    {instrumentation.map(el => (
                      <li>{el}</li>
                    ))}
                  </ul>
                  <div className="flex-grow" />
                  {soundcloud && (
                    <SoundCloud
                      url={soundcloud}
                      colour={tailwind.theme.backgroundColor.red["500"]}
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CompositionsPage
