import React, { ReactNode } from "react"

import { Icon, Typography } from "@atoms/index"

import font from "@font"
import color from "@color"

import check from "@icon/icon_check.png"
import circle from "@icon/icon_circle.png"

interface IconTypographyProps {
  content: string
  type?: "check" | "circle" | string
  iconSize?: "small" | "big" | "vector"
}

const IconTypography: React.FC<IconTypographyProps> = ({
  content,
  type = "check",
  iconSize = "small",
}) => {
  let iconTypographyContent: ReactNode

  switch (type) {
    case "circle":
      iconTypographyContent = (
        <div>
          <Icon src={circle} size={iconSize} />
          <Typography variant={font.bungee14} color={color.red50}>
            {content}
          </Typography>
        </div>
      )
      break
    default:
      iconTypographyContent = (
        <div>
          <Icon src={check} size={iconSize} />
          <Typography variant={font.title1} color={color.white}>
            {content}
          </Typography>
        </div>
      )
  }

  return iconTypographyContent
}

export default IconTypography
