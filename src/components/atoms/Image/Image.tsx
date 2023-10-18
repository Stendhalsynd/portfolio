import React, { CSSProperties } from "react"

export interface ImageProps {
  src: string
  height: number | string
  width?: number
  alt?: string
  style?: CSSProperties
}

const Image: React.FC<ImageProps> = ({ src, height, width, alt, style }) => {
  return <img src={src} height={height} width={width} alt={alt} style={style} />
}

export default Image
