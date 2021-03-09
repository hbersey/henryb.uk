import React, { FC } from "react"
import { Link } from "gatsby"
import { Menu } from "heroicons-react"

const Layout: FC = ({ children }) => {
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
        <button onClick={() => alert("Hello, World!")}>
          <Menu
            size={32}
            className="my-auto sm:invisible sm:w-0 sm:h-0 visible w-auto h-auto"
          />
        </button>
      </header>

      <main className="flex-grow overflow-auto">{children}</main>

      <footer className="text-center py-2">
        <p>© Henry Bersey 2021</p>
      </footer>
    </div>
  )
}

export default Layout
