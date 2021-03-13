import { PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/Layout"

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout hideMenuButton>
      <div className="flex h-full text-center">
        <div className="m-auto w-2/3">
          <h1 className="lg:text-8xl sm:text-7xl text-5xl">Henry Bersey</h1>
          <div className=" mx-auto w-2/3">
            <div className="text-lg pt-16 sm:flex block ">
              <div className="sm:w-1/2 sm:mb-0 w-full mb-1">
                <button className="border border-gray-300 rounded px-2 py-1">
                  Programmer
                </button>
              </div>
              <div className="sm:w-1/2 w-f">
                <button className="border border-gray-300 rounded px-2 py-1">
                  Musician
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
