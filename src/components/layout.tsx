import React, { FC, useState } from "react"
import { Link } from "gatsby"
import { Menu } from "heroicons-react"
import { Helmet } from "react-helmet"
import { WindowLocation } from "@reach/router"
import iconImage from "../images/icon.jpg"

type Props = {
  location: WindowLocation<unknown>
  hideMenuButton?: boolean
  pageName?: string
  description?: string
}

const Layout: FC<Props> = ({
  children,
  hideMenuButton,
  pageName,
  description,
}) => {
  const [showDrawer, setDrawerVisibility] = useState(false)

  const handleShowDrawer = () => setDrawerVisibility(!showDrawer)
  const hideDrawer = () => setDrawerVisibility(false)

  const title = pageName ? `${pageName} - Henry Bersey` : `Henry Bersey`
  const canonical = `https://henryb.uk${location.pathname}`

  return (
    <>
      <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
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

        {description && <meta name="og:description" content={description} />}
        <meta name="og:locale" content="en_GB" />
        <meta name="og:site_name" content="Henry Bersey" />
      </Helmet>
      <div className="h-screen max-h-screen">
        <div className="flex flex-col h-full max-h-full overflow-hidden divide-y">
          <header className="flex flex-row px-4 pb-1 text-white bg-red-500 shadow-lg">
            <div className="flex-grow">
              <Link className="text-3xl" to="/">
                Henry Bersey
              </Link>
              <div className="invisible w-0 h-0 my-auto text-lg sm:visible sm:w-auto sm:h-auto">
                <Link to="/dev">Programmer</Link>
                &nbsp;|&nbsp;
                <Link to="/music">Musician</Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="invisible w-0 h-0 my-auto sm:visible sm:w-auto sm:h-auto"
            >
              GET IN TOUCH
            </Link>
            <button onClick={handleShowDrawer}>
              <Menu
                size={32}
                className={`my-auto sm:invisible sm:w-0 sm:h-0 visible ${
                  hideMenuButton ? "w-0 h-0" : "w-auto h-auto"
                }`}
              />
            </button>
          </header>

          <div className="flex-grow overflow-hidden divide-x">
            <main className="w-full h-full overflow-auto" onClick={hideDrawer}>
              {children}
            </main>
            {showDrawer && (
              <aside className="fixed top-0 right-0 flex flex-col w-2/3 h-full px-1 overflow-auto bg-white divide-y bg-opacity-95">
                <h1 className="py-1 text-2xl">Henry Bersey</h1>
                <Link to="/music" className="py-1 text-lg">
                  Musician
                </Link>
                <Link to="/dev" className="py-1 text-lg">
                  Programmer
                </Link>
              </aside>
            )}
          </div>

          <footer className="py-2 text-center">
            <p>© Henry Bersey 2021</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Layout
