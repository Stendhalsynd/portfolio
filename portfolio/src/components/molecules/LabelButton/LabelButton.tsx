import React, { ReactNode } from "react"
import Typography from "../../atoms/Typography/Typography"

import color from "../../../static/colors/color.json"
import data from "../../../static/data/data.json"

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
          <Typography variant={"bungee2"} color={color.white}>
            {data.LabelButton.double.front}
          </Typography>
          <br />
          <Typography variant={"bungee2"} color={color.black1}>
            {data.LabelButton.double.back}
          </Typography>
        </button>
      )
      break
    case "font":
      buttonContent = (
        <button>
          <Typography variant={"bungee2"} color={color.white}>
            {content}
          </Typography>
        </button>
      )
      break
    case "lime":
      buttonContent = (
        <button style={{ background: color.lime }}>
          <Typography variant={"bungee36"} color={color.white}>
            {content}
          </Typography>
        </button>
      )
      break
    default:
      buttonContent = (
        <button>
          <Typography variant={"bungee36"} color={color.lime}>
            {content}
          </Typography>
        </button>
      )
      break
  }

  return buttonContent
}

export default LabelButton
