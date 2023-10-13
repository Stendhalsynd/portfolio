import React from "react"

interface IconProps {
  src: string
  size?: string
  alt?: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ src, size = "small", alt, className }) => {
  let width, height
  switch (size) {
    case "small":
      width = "20px"
      height = "20px"
      break
    case "big":
      width = "35px"
      height = "35px"
      break
    case "vector":
      width = "45px"
      height = "45px"
  }
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  )
}

export default Icon
