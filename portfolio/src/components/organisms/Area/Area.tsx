import React, { ReactNode } from "react"

import { Icon, Typography } from "@atoms/index"
import { Label } from "@molecules/index"

// import color from "../../../static/colors/color.json"
import color from "@color"
import font from "@font"
import data from "@data"

import leftArrow from "@icon/icon_left_arrow.png"
import rightArrow from "@icon/icon_right_arrow.png"

interface AreaProps {
  children?: ReactNode
  index?: number
  length?: number
  title?: string
  variant?: "default" | "main_menu" | "sub_menu"
}

const Area: React.FC<AreaProps> = ({
  children,
  index = 1,
  length,
  title,
  variant = "default",
}) => {
  const areaStyle: React.CSSProperties = {
    borderRadius: "50px",
    border: `10px solid ${color.red50}`,
    background: `${color.white}`,
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: "fit-content",
  }

  let areaContent: ReactNode
  switch (variant) {
    case "main_menu":
      areaContent = (
        <div
          style={{
            background: color.green30,
            display: "flex",
            width: "fit-content",
            padding: "15px 20px",
            borderRadius: "35px",
            alignItems: "center",
          }}
        >
          <Icon src={leftArrow} size={data.Icon.size.big} />
          <Label
            style={{
              padding: "0 13px",
            }}
          >
            <Typography variant={font.bungee4title} color={color.white}>
              0{index + 1}/0{length}
            </Typography>
            <br />
            <Typography variant={font.bungee4title} color={color.black1}>
              {title}
            </Typography>
          </Label>
          <Icon src={rightArrow} size={data.Icon.size.big} />
        </div>
      )
      break
    case "sub_menu":
      areaContent = (
        <div
          style={{
            background: color.green30,
            display: "flex",
            width: "fit-content",
            padding: "0 20px",
            borderRadius: "35px",
            alignItems: "center",
          }}
        >
          <Icon src={leftArrow} size={data.Icon.size.big} />
          <Label
            style={{
              padding: "0 13px",
            }}
          >
            <Typography variant={font.bungee2} color={color.white}>
              0{index + 1}/0{length}
            </Typography>
          </Label>
          <Icon src={rightArrow} size={data.Icon.size.big} />
        </div>
      )
      break
    default:
      areaContent = <div style={areaStyle}>{children}</div>
      break
  }

  return areaContent
}

export default Area
