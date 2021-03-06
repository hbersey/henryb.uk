import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../../components/layout"
import SoundCloud from "../../components/soundcloud"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "../../../tailwind.config"
import { compositions, arrangements } from "../../content/compositions.json"

const tailwind = resolveConfig(tailwindConfig)

const CompositionsPage: FC<PageProps> = () => {
  return (
    <Layout
      pageName="Compositions"
      description="Original compositions and arrangements by Henry Bersey."
    >
      <div className="flex flex-col mt-1">
        <div className="w-11/12 mx-auto xl:w-2/3 md:w-5/6">
          <h3 className="mb-2 text-4xl">Compositions</h3>

          <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
            {compositions.map(
              ({ title, year, description, instrumentation, soundcloud }) => (
                <div className="flex flex-col pt-2">
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
                      title={`"${title}" on SoundCloud`}
                    />
                  )}
                </div>
              )
            )}
          </div>
        </div>

        <hr className="my-4" />

        <div className="w-11/12 mx-auto xl:w-2/3 md:w-5/6">
          <h3 className="mb-2 text-4xl">Arrangements</h3>

          <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
            {arrangements.map(
              ({
                title, // year,
                original,
                description,
                instrumentation,
              }) => (
                // soundcloud,
                <div className="flex flex-col pt-2">
                  <h2 className="text-2xl">
                    {/* {title} ({year ?? "TBF"}) */}
                    {title} (TBF)
                  </h2>
                  <h3 className="text-xl italic">{original}</h3>
                  <p>{description}</p>
                  <p className="font-semibold">Instrumentation:</p>
                  <ul className="list-disc list-inside">
                    {instrumentation.map(el => (
                      <li>{el}</li>
                    ))}
                  </ul>
                  <div className="flex-grow" />
                  {/* {soundcloud && (
                    <SoundCloud
                      url={soundcloud}
                      colour={tailwind.theme.backgroundColor.red["500"]}
                    />
                  )} */}
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
