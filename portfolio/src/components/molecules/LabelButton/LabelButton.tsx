import React, { CSSProperties, ReactNode } from "react"
import { Typography } from "@atoms/index"

import color from "@color"
import data from "@data"
import font from "@font"
import styles from "@style"

interface LabelButtonProps {
  variant: "default" | "double" | "font" | "lime" | "green"
  pos?: string
  top?: number
  left?: number
  right?: number
  bottom?: number
  content?: ReactNode
  style?: CSSProperties
  // onClick: () => void
}

const LabelButton: React.FC<LabelButtonProps> = ({
  variant = "default",
  pos,
  top,
  left,
  right,
  bottom,
  content,
  style,
  // onClick,
}) => {
  let buttonContent: ReactNode

  switch (variant) {
    case "double":
      buttonContent = (
        <button
          style={{
            background: color.lime,
            borderRadius: styles.borderRadius.br35,
            border: `5px solid ${color.white}`,
            padding: "10px 20px",
            transform: "rotate(17.82deg)",
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
        >
          <Typography variant={font.bungee2} color={color.white}>
            {data.LabelButton.double.front}
          </Typography>
          <br />
          <Typography variant={font.bungee2} color={color.black1}>
            {data.LabelButton.double.back}
          </Typography>
        </button>
      )
      break
    case "font":
      buttonContent = (
        <button style={{ ...style }}>
          <Typography variant={font.bungee2} color={color.white}>
            {content}
          </Typography>
        </button>
      )
      break
    case "lime":
      buttonContent = (
        <button style={{ background: color.lime, ...style }}>
          <Typography variant={font.bungee36} color={color.white}>
            {data.LabelButton.lime.projects}
          </Typography>
        </button>
      )
      break
    case "green":
      buttonContent = (
        <button style={{ background: color.green, ...style }}>
          <Typography variant={font.title2} color={color.lightblack}>
            {data.LabelButton.green.domain}
          </Typography>
        </button>
      )
      break
    default:
      buttonContent = (
        <button style={{ ...style }}>
          <Typography variant={font.bungee36} color={color.lime}>
            {content}
          </Typography>
        </button>
      )
      break
  }

  return buttonContent
}

export default LabelButton
