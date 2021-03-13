import React, { FC, useState } from "react"
import { Link } from "gatsby"
import { Menu } from "heroicons-react"

const Layout: FC = ({ children }) => {
  const [showDrawer, setDrawerVisibility] = useState(false)

  const handleShowDrawer = () => setDrawerVisibility(!showDrawer)
  const hideDrawer = () => setDrawerVisibility(false)

  return (
    <div className="flex flex-col h-screen divide-y">
      <header className="bg-red-500 text-white px-4 pb-1 shadow-lg flex flex-row">
        <div className="flex-grow">
          <Link className="text-3xl" to="/">
            Henry Bersey
          </Link>
          <div className="text-lg my-auto sm:visible sm:w-auto sm:h-auto invisible w-0 h-0">
            <Link to="/dev">Programmer</Link>
            &nbsp;|&nbsp;
            <Link to="/music">Musician</Link>
          </div>
        </div>
        <Link
          to="/contact"
          className="my-auto sm:visible sm:w-auto sm:h-auto invisible w-0 h-0"
        >
          GET IN TOUCH
        </Link>
        <button onClick={handleShowDrawer}>
          <Menu
            size={32}
            className="my-auto sm:invisible sm:w-0 sm:h-0 visible w-auto h-auto"
          />
        </button>
      </header>

      <div className="flex-grow divide-x">
        <main className="overflow-auto w-full h-full" onClick={hideDrawer}>
          {children}
        </main>
        {showDrawer && (
          <aside className="overflow-auto fixed right-0 top-0 w-2/3 h-full bg-white bg-opacity-95 divide-y flex flex-col px-1">
            <h1 className="text-2xl py-1">Henry Bersey</h1>
            <Link to="/music" className="text-lg py-1">
              Musician
            </Link>
            <Link to="/dev" className="text-lg py-1">
              Programmer
            </Link>
          </aside>
        )}
      </div>

      <footer className="text-center py-2">
        <p>© Henry Bersey 2021</p>
      </footer>
    </div>
  )
}

export default Layout
