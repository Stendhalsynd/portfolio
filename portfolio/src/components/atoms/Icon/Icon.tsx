import React from "react"

interface IconProps {
  src: string
  size?: string
  alt?: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ src, size = "small", alt, className }) => {
  let width
  switch (size) {
    case "small":
      width = "20px"
      break
    case "big":
      width = "35px"
      break
    case "vector":
      width = "45px"
  }
  return <img src={src} width={width} alt={alt} className={className} />
}

export default Icon
