import React, { FC } from "react"
import { PageProps } from "gatsby"
import Layout from "../../components/layout"
import Youtube from "../../components/youtube"
import Spotify from "../../components/spotify"
import { playing } from "../../content/playing.json"

const renderItem = (item: any, top: boolean) => (
  <div className="flex flex-col">
    <div className="flex-grow">
      <h2 className={top ? "text-3xl" : "text-xl"}>{item.title}</h2>
      <h3 className="text-gray-600">{item.subtitle}</h3>
    </div>
    {item.children ? (
      <div className="grid grid-cols-none xl:grid-cols-3 md:grid-cols-2 gap-x-3 gap-y-2">
        {item.children.map(el => renderItem(el, false))}
      </div>
    ) : (
      <div>
        {item.youtube && (
          <Youtube {...item.youtube} title={item.subtitle ?? item.title} />
        )}
        {item.spotify && <Spotify spotifyUri={item.spotify} />}
      </div>
    )}
  </div>
)

const PlayingPage: FC<PageProps> = ({}) => {
  return (
    <Layout
      pageName="Playing"
      description="Videos of Henry Bersey playing and singing."
    >
      <div className="h-full px-2 py-2 space-y-2 divide-y lg:px-32 sm:px-8">
        {playing.map(el => renderItem(el, true))}
      </div>
    </Layout>
  )
}

export default PlayingPage
