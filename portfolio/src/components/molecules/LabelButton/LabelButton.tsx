import React, { ReactNode } from "react"
import { Typography } from "@atoms/index"
import color from "@color"
import data from "@data"
import font from "@font"

interface LabelButtonProps {
  variant: "default" | "double" | "font" | "lime"
  content?: ReactNode
  // onClick: () => void
}

const LabelButton: React.FC<LabelButtonProps> = ({
  variant = "default",
  content,
  // onClick,
}) => {
  let buttonContent: ReactNode

  switch (variant) {
    case "double":
      buttonContent = (
        <button style={{ background: color.lime }}>
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
        <button>
          <Typography variant={font.bungee2} color={color.white}>
            {content}
          </Typography>
        </button>
      )
      break
    case "lime":
      buttonContent = (
        <button style={{ background: color.lime }}>
          <Typography variant={font.bungee36} color={color.white}>
            {content}
          </Typography>
        </button>
      )
      break
    default:
      buttonContent = (
        <button>
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
