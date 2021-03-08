import React, { FC } from "react"

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col h-screen divide-y">
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

      <main className="flex-grow overflow-auto">{children}</main>

      <footer className="text-center py-2">
        <p>© Henry Bersey 2021</p>
      </footer>
    </div>
  )
}

export default Layout
