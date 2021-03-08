import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="m-auto">
          <h1 className="text-8xl">Henry Bersey</h1>
          <div className="text-lg text-center flex flex-row pt-16">
            <div className="flex-grow">
              <button className="border border-gray-300 rounded px-2 py-1">
                Programmer
              </button>
            </div>
            <div className="flex-grow">
              <button className="border border-gray-300 rounded px-2 py-1">
                Musician
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
