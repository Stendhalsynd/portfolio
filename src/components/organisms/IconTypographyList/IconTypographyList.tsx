import React, { useEffect } from "react"

import { List, IconTypography } from "@molecules/index"

import AOS from "aos"
import "aos/dist/aos.css"

interface IconTypographyListProps {
  contents: string[]
}

const IconTypographyList: React.FC<IconTypographyListProps> = ({
  contents,
}) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <List
      ordered={false}
      flexDirection="column"
      style={{ width: "90vw", maxWidth: "1200px" }}
    >
      {contents.map((content, index) => (
        <li
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          key={index}
        >
          <IconTypography content={content} />
        </li>
      ))}
    </List>
  )
}

export default IconTypographyList
