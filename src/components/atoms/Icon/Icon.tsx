import React, { CSSProperties } from "react"

interface IconProps {
  src: string
  size?: string
  alt?: string
  pos?: string
  top?: number | string
  left?: number | string
  right?: number | string
  bottom?: number | string
  style?: CSSProperties
}

const Icon: React.FC<IconProps> = ({
  src,
  size = "small",
  alt,
  pos,
  top,
  left,
  right,
  bottom,
  style,
}) => {
  let width, height
  switch (size) {
    case "small":
      width = "20px"
      height = "20px"
      break
    case "middle":
      width = "24px"
      height = "24px"
      break
    case "big":
      width = "35px"
      height = "35px"
      break
    case "vector":
      width = "45px"
      height = "34px"
  }
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      style={{
        position: pos ? "absolute" : "relative",
        alignSelf:
          pos === "absolute_left"
            ? "flex-start"
            : pos === "absolute_right"
            ? "flex-end"
            : undefined,
        top,
        left,
        right,
        bottom,
        ...style,
      }}
    />
  )
}

export default Icon
