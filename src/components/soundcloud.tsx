import React, { FC } from "react"

type Props = {
  url: string
  colour?: string
  title?: string
}

const SoundCloud: FC<Props> = ({ url, colour = "#ff5500", title }) => {
  return (
    <iframe
      width="100%"
      height="166"
      scrolling="no"
      frameBorder="no"
      allow="autoplay"
      src={`https://w.soundcloud.com/player/?url=${url}&color=${colour.substr(
        colour.length - 6
      )}`}
      title={title}
      loading={"lazy"}
    />
  )
}

export default SoundCloud
