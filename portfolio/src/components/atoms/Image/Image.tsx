import React from "react"

export interface ImageProps {
  src: string
  height: number
  width?: number
  alt?: string
  className?: string
}

const Image: React.FC<ImageProps> = ({
  src,
  height,
  width,
  alt,
  className,
}) => {
  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      className={className}
    />
  )
}

export default Image
