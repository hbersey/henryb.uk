import { PageProps, Link } from "gatsby"
import React, { FC } from "react"
import Layout, { pageTransitionLinkProps } from "../components/layout"
import TransitionLink from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout
      pageName="Home"
      description="Personal site for Henry Bersey, a programer and a musician. "
    >
      <div className="flex h-full text-center">
        <div className="w-2/3 m-auto">
          <motion.h1
            className="text-5xl lg:text-8xl sm:text-7xl"
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 1 }}
          >
            Henry Bersey
          </motion.h1>
          <div className="w-2/3 mx-auto ">
            <div className="block pt-16 text-lg sm:flex ">
              <motion.div
                className="w-full mb-1 sm:w-1/2 sm:mb-0"
                animate={{ opacity: [0, 1, 1], y: [20, -10, 0] }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <TransitionLink to="/dev" {...pageTransitionLinkProps}>
                  <button className="px-2 py-1 border border-gray-300 rounded">
                    Programmer
                  </button>
                </TransitionLink>
              </motion.div>
              <motion.div
                className="sm:w-1/2 w-f"
                animate={{ opacity: [0, 1, 1], y: [20, -10, 0] }}
                transition={{ duration: 0.5, delay: 1.25 }}
              >
                <TransitionLink to="/music" {...pageTransitionLinkProps}>
                  <button className="px-2 py-1 border border-gray-300 rounded">
                    Musician
                  </button>
                </TransitionLink>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
