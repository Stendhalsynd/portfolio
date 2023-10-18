import { CSSProperties, ReactNode } from "react"

export interface TypographyProps {
  children: ReactNode
  variant: string
  color?: string
  style?: CSSProperties
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  color = "black",
  style,
}) => {
  let fontFamily, fontSize, fontWeight, lineHeight
  switch (variant) {
    case "bungee5":
      fontFamily = "Bungee"
      fontSize = "48px"
      fontWeight = 400
      lineHeight = "normal"
      break
    case "bungee14":
      fontFamily = "Bungee"
      fontSize = "14px"
      fontWeight = 400
      lineHeight = "20px"
      break
    case "bungee2":
      fontFamily = "Bungee"
      fontSize = "16px"
      fontWeight = 400
      lineHeight = "16px"
      break
    case "bungee4":
      fontFamily = "Bungee"
      fontSize = "24px"
      fontWeight = 400
      lineHeight = "16px"
      break
    case "bungee4title":
      fontFamily = "Bungee"
      fontSize = "24px"
      fontWeight = 400
      lineHeight = "20px"
      break
    case "bungee":
      fontFamily = "Bungee"
      fontSize = "32px"
      fontWeight = 400
      lineHeight = "40px"
      break
    case "bungee36":
      fontFamily = "Bungee"
      fontSize = "36px"
      fontWeight = 400
      lineHeight = "normal"
      break
    case "bungee48":
      fontFamily = "Bungee"
      fontSize = "48px"
      fontWeight = 400
      lineHeight = "normal"
      break
    case "bungee55":
      fontFamily = "Bungee"
      fontSize = "55px"
      fontWeight = 400
      lineHeight = "normal"
      break
    case "bungee75":
      fontFamily = "Bungee"
      fontSize = "75px"
      fontWeight = 400
      lineHeight = "normal"
      break
    case "headline3":
      fontFamily = "Roboto"
      fontSize = "20px"
      fontWeight = 700
      lineHeight = "24px"
      break
    case "headline4":
      fontFamily = "Roboto"
      fontSize = "24px"
      fontWeight = 800
      lineHeight = "40px"
      break
    case "title1":
      fontFamily = "Roboto"
      fontSize = "16px"
      fontWeight = 700
      lineHeight = "20px"
      break
    case "title2":
      fontFamily = "Roboto"
      fontSize = "14px"
      fontWeight = 700
      lineHeight = "18px"
      break
    default: // bungee2
      fontFamily = "Bungee"
      fontSize = "16px"
      fontWeight = 400
      lineHeight = "16px"
  }

  const textStyle = {
    fontSize,
    color,
    fontWeight,
    fontFamily,
    lineHeight,
  }

  return <span style={{ ...textStyle, ...style }}>{children}</span>
}

export default Typography
