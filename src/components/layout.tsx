import React, { FC } from "react"
import { Link } from "gatsby"

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen divide-y">
      <header className="bg-red-500 text-white px-4 pb-1 shadow-lg flex flex-row">
        <div>
          <Link className="text-3xl" to="/">
            Henry Bersey
          </Link>
          <div className="text-lg">
            <Link to="/dev">Programmer</Link>
            &nbsp;|&nbsp;
            <Link to="/music">Musician</Link>
          </div>
        </div>
        <div className="flex-grow" />
        <Link to="/contact" className="my-auto">
          GET IN TOUCH
        </Link>
      </header>

      <main className="flex-grow overflow-auto">{children}</main>

      <footer className="text-center py-2">
        <p>© Henry Bersey 2021</p>
      </footer>
    </div>
  )
}

export default Layout
