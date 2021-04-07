import { PageProps, Link } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"

const IndexPage: FC<PageProps> = ({location}) => {
  return (
    <Layout hideMenuButton location={location} pageName="Home">
      <div className="flex h-full text-center">
        <div className="w-2/3 m-auto">
          <h1 className="text-5xl lg:text-8xl sm:text-7xl">Henry Bersey</h1>
          <div className="w-2/3 mx-auto ">
            <div className="block pt-16 text-lg sm:flex ">
              <div className="w-full mb-1 sm:w-1/2 sm:mb-0">
                <Link to="/dev">
                  <button className="px-2 py-1 border border-gray-300 rounded">
                    Programmer
                  </button>
                </Link>
              </div>
              <div className="sm:w-1/2 w-f">
                <Link to="/music">
                  <button className="px-2 py-1 border border-gray-300 rounded">
                    Musician
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
