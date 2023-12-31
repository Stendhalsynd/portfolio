import React, { ReactNode } from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import { Icon, Typography } from "@atoms/index"
import { Label } from "@molecules/index"

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
  const isMobile = useRecoilValue(isMobileState)

  let iconTypographyContent: ReactNode
  let containerStyle = {
    display: "flex",
    alignItems: "center",
    marginLeft: "2vw",
  }
  let labelStyle = {
    padding: isMobile ? "8px" : "5px 20px",
  }

  switch (type) {
    case "circle":
      iconTypographyContent = (
        <div style={containerStyle}>
          <Icon src={circle} size={iconSize} />
          <Label style={labelStyle}>
            <Typography variant={font.bungee14} color={color.red50}>
              {content}
            </Typography>
          </Label>
        </div>
      )
      break
    default:
      iconTypographyContent = (
        <div style={containerStyle}>
          <Icon src={check} size={iconSize} />
          <Label style={labelStyle}>
            <Typography
              variant={isMobile ? font.title1 : font.headline4}
              color={color.white}
            >
              {content}
            </Typography>
          </Label>
        </div>
      )
  }

  return iconTypographyContent
}

export default IconTypography
