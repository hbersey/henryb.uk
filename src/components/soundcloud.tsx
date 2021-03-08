import React, { FC } from "react"

type Props = {
  url: string
  colour?: string
}

const SoundCloud: FC<Props> = ({ url, colour = "#ff5500" }) => {
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
      loading={"lazy"}
    />
  )
}

export default SoundCloud
