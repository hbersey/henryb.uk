import React, { FC, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

type Props = { title: string } & ({ video: string } | { playlist: string })

const Youtube: FC<Props> = props => {
  const [facade, setFacade] = useState(true)

  const src =
    "video" in props
      ? `https://www.youtube.com/embed/${props.video}`
      : `https://www.youtube.com/embed/videoseries?list=${props.playlist}`

  return (
    <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
      {facade ? (
        <div
          className={`absolute top-0 left-0 flex flex-col w-full h-full group ${
            "video" in props ? "bg-cover bg-center text-gray-600" : "bg-black"
          }`}
          style={{
            backgroundImage:
              "video" in props
                ? `url(http://img.youtube.com/vi/${props.video}/maxresdefault.jpg)`
                : undefined,
          }}
          onClick={() => setFacade(false)}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 flex">
            <FontAwesomeIcon
              icon={faYoutube}
              className="m-auto text-6xl group-hover:text-red-600"
            />
          </div>
          <div className="absolute top-0 bottom-0 right-0 flex left-0.5">
            <FontAwesomeIcon
              icon={faPlay}
              className={`m-auto text-xl ${
                "video" in props ? "text-white" : "text-transparent"
              }`}
            />
          </div>
        </div>
      ) : (
        <iframe src={src} className="absolute top-0 left-0 w-full h-full bg-black" />
      )}
    </div>
  )
}

export default Youtube
