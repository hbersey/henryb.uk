import React, { FC } from "react"

type Props = { video: string } | { playlist: string }

const Youtube: FC<Props> = props => {
  const src =
    "video" in props
      ? `https://www.youtube.com/embed/${props.video}`
      : `https://www.youtube.com/embed?listType=playlist&list=${props.playlist}`
  return (
    <div className="relative h-0" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={src}
        className="absolute top-0 left-0 w-full h-full"
        {...props}
      />
    </div>
  )
}

export default Youtube
