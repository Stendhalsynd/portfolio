import React from "react"
import Image, { ImageProps } from "../../atoms/Image/Image"
import color from "../../../static/colors/color.json"

interface AreaProps {
  images: ImageProps[]
}

const Area: React.FC<AreaProps> = ({ images }) => {
  const areaStyle: React.CSSProperties = {
    borderRadius: "50px",
    border: `10px solid ${color.red}`,
    background: `${color.white}`,
    padding: "30px",
    display: "flex",
    justifyContent: "space-between",
  }

  const imageSpacing: React.CSSProperties = {
    marginRight: "10px", // Adjust the spacing as needed
  }

  return (
    <div style={areaStyle}>
      {/* {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          className={image.className}
          style={index < images.length - 1 ? imageSpacing : {}}
        />
      ))} */}
    </div>
  )
}

export default Area
