import React, { FC } from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../../components/Layout"
import Youtube from "../../components/youtube"
import Spotify from "../../components/spotify"

type Item = {
  title: string
  subtitle: string | null
  children: Item[] | null
  youtube: { playlist: string } | { video: string } | null
  spotify: string | null
}

type Data = {
  allContentJson: {
    edges: {
      next: {
        playing: Item[]
      }
    }[]
  }
}

type Props = PageProps<Data>

export const pageQuery = graphql`
  query PlayingPageQuery {
    allContentJson {
      edges {
        next {
          playing {
            subtitle
            title
            children {
              title
              youtube {
                video
                playlist
              }
              spotify
            }
          }
        }
      }
    }
  }
`

const renderItem = (item: Item, top: boolean) => (
  <div className="flex flex-col">
    <div className="flex-grow">
      <h2 className={top ? "text-3xl" : "text-xl"}>{item.title}</h2>
      <h3 className="text-gray-600">{item.subtitle}</h3>
    </div>
    {item.children != null ? (
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-none gap-x-3 gap-y-2">
        {item.children.map(el => renderItem(el, false))}
      </div>
    ) : (
      <div >
        {item.youtube != null && <Youtube {...item.youtube} />}
        {item.spotify != null && <Spotify spotifyUri={item.spotify} />}
      </div>
    )}
  </div>
)

const PlayingPage: FC<Props> = ({ data }) => {
  const { playing } = data.allContentJson.edges[0].next

  return (
    <Layout>
      <div className="h-full py-2 lg:px-32 sm:px-8 px-2 divide-y space-y-2">
        {playing.map(el => renderItem(el, true))}
      </div>
    </Layout>
  )
}

export default PlayingPage
