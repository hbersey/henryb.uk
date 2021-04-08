import React, { FC, useEffect, useState } from "react"
import { Link } from "gatsby"
import { Menu } from "heroicons-react"
import { Helmet } from "react-helmet"
import { Location } from "@reach/router"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import { motion } from "framer-motion"
import iconImage from "../images/icon.jpg"

type Props = {
  pageName?: string
  description?: string
}

export const pageTransitionLinkProps = {
  exit: {
    length: 0.4,
    state: { x: -window.innerWidth, opacity: 0 },
  },
  entry: {
    delay: 0.4,
    state: { x: window.innerWidth },
  },
}

const Layout: FC<Props> = ({ children, pageName, description }) => {
  const [showDrawer, setDrawerVisibility] = useState(false)

  const handleShowDrawer = () => setDrawerVisibility(!showDrawer)
  const hideDrawer = () => setDrawerVisibility(false)

  return (
    <TransitionState>
      {({ transitionStatus, entry, exit , mount}) => (
        <>
          <Location>
            {({ location }) => {
              const title = pageName
                ? `${pageName} - Henry Bersey`
                : `Henry Bersey`
              const canonical = `https://henryb.uk${location.pathname}`

              return (
                <Helmet>
                  <title>{title}</title>
                  {description && (
                    <meta name="description" content={description} />
                  )}
                  <link rel="canonical" href={canonical} />

                  {/* Open Graph Data */}
                  <meta property="og:title" content={title} />
                  <meta property="og:type" content="website" />
                  <meta property="og:url" content={canonical} />
                  <meta property="og:image" content={iconImage} />

                  {/*Additional Open Graph Data */}
                  <meta property="og:image:type" content="image/jpeg" />
                  <meta property="og:image:width" content="627" />
                  <meta property="og:image:height" content="627" />
                  <meta property="og:image:alt" content="Henry Bersey" />

                  {description && (
                    <meta name="og:description" content={description} />
                  )}
                  <meta name="og:locale" content="en_GB" />
                  <meta name="og:site_name" content="Henry Bersey" />

                  {/* Twitter Card Data */}
                  <meta name="twitter:card" content="summary" />
                  <meta name="twitter:site" content="@HBersey" />
                  <meta name="twitter:creator" content="@HBersey" />
                  <meta name="twitter:title" content={title} />
                  {description && (
                    <meta name="twitter:description" content={description} />
                  )}
                  <meta property="twitter:image" content={iconImage} />
                </Helmet>
              )
            }}
          </Location>

          <div className="h-screen max-h-screen dark:bg-gray-700 dark:text-white">
            <div className="flex flex-col h-full max-h-full overflow-hidden">
              <header className="flex flex-row px-4 pb-1 text-white bg-red-500 shadow-lg dark:bg-gray-800">
                <div className="flex-grow">
                  <TransitionLink
                    className="text-3xl"
                    to="/"
                    {...pageTransitionLinkProps}
                  >
                    Henry Bersey
                  </TransitionLink>
                  <div className="invisible w-0 h-0 my-auto text-lg sm:visible sm:w-auto sm:h-auto">
                    <TransitionLink to="/dev" {...pageTransitionLinkProps}>
                      Programmer
                    </TransitionLink>
                    &nbsp;|&nbsp;
                    <TransitionLink to="/music" {...pageTransitionLinkProps}>
                      Musician
                    </TransitionLink>
                  </div>
                </div>
                <TransitionLink
                  to="/contact"
                  className="invisible w-0 h-0 my-auto sm:visible sm:w-auto sm:h-auto"
                  {...pageTransitionLinkProps}
                >
                  GET IN TOUCH
                </TransitionLink>
                <button onClick={handleShowDrawer}>
                  <Menu
                    size={32}
                    className="visible w-auto h-auto my-auto sm:invisible sm:w-0 sm:h-0"
                  />
                </button>
              </header>

              <div className="flex-grow overflow-hidden">
                <motion.main
                  className={`w-full h-full overflow-${
                   mount ? "auto" : "hidden"
                  }`}
                  onClick={hideDrawer}
                  initial={entry.state}
                  animate={
                    transitionStatus == "exiting"
                      ? exit.state
                      : { opacity: 1, x: 0, y: 0 }
                  }
                  transition={
                    transitionStatus == "exiting"
                      ? { duration: exit.length }
                      : { duration: 0.4 }
                  }
                >
                  {children}
                </motion.main>
                {showDrawer && (
                  <aside className="fixed top-0 right-0 flex flex-col w-2/3 h-full px-1 overflow-auto text-lg bg-white divide-y dark:bg-gray-700 bg-opacity-95">
                    <h1 className="py-1 text-2xl">Henry Bersey</h1>
                    <TransitionLink
                      to="/music"
                      className="py-1"
                      {...pageTransitionLinkProps}
                    >
                      Musician
                    </TransitionLink>
                    <TransitionLink
                      to="/dev"
                      className="py-1"
                      {...pageTransitionLinkProps}
                    >
                      Programmer
                    </TransitionLink>
                    <div className="flex-grow" />
                    <TransitionLink
                      to="/contact"
                      className="py-1"
                      {...pageTransitionLinkProps}
                    >
                      Get In Touch
                    </TransitionLink>
                  </aside>
                )}
              </div>

              <footer className="py-2 text-center border-t dark:border-white">
                <p>© Henry Bersey 2021</p>
              </footer>
            </div>
          </div>
        </>
      )}
    </TransitionState>
  )
}

export default Layout
