import React, { FC } from "react"

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header className="bg-red-500 text-white px-4 pb-1 shadow-lg flex flex-row">
        <div>
          <button className="text-3xl">Henry Bersey</button>
          <div className="text-lg">
            <button>Programmer</button>
            &nbsp;|&nbsp;
            <button>Musician</button>
          </div>
        </div>
          <div className="flex-grow" />
        <button>GET IN TOUCH</button>
      </header>

      <main className="flex-grow">{children}</main>

      <footer></footer>
    </div>
  )
}

export default Layout
