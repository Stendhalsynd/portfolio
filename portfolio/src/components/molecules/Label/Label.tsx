import React, { ReactNode } from "react"
import { Typography, TypographyProps } from "@atoms/index"

interface LabelProps {
  children: ReactNode
  variant: TypographyProps["variant"]
  color?: TypographyProps["color"]
  additionalTypography?: TypographyProps
}

const Label: React.FC<LabelProps> = ({
  children,
  variant,
  color = "black",
  additionalTypography,
}) => {
  return (
    <p>
      <Typography variant={variant} color={color}>
        {children}
      </Typography>
      {additionalTypography && (
        <Typography {...additionalTypography}>{children}</Typography>
      )}
    </p>
  )
}

export default Label
