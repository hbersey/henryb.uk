import React, { FC } from "react"

type Props = {
  spotifyUri: string
}

const Spotify: FC<Props> = ({ spotifyUri }) => {
  const [, type, id] = spotifyUri.split(":")

  return (
    <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={`https://open.spotify.com/embed/${type}/${id}`}
        className="absolute top-0 left-0 w-full h-full"
        allowTransparency
        allow="encrypted-media"
      />
    </div>
  )
}

export default Spotify
