import { FC } from "react"

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header></header>

      <main className="flex-grow">{children}</main>

      <footer></footer>
    </div>
  )
}

export default Layout
