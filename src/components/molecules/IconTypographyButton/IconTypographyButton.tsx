import React, { CSSProperties } from "react"
import { IconTypography } from "@molecules/index"

import data from "@data"

interface IconTypographyButtonProps {
  content: string
  style?: CSSProperties
}

const IconTypographyButton: React.FC<IconTypographyButtonProps> = ({
  content,
  style,
}) => {
  const containerStyle = {
    borderRadius: "100px",
  }

  return (
    <div style={{ ...containerStyle, ...style, backgroundColor: "white" }}>
      <IconTypography
        content={content}
        type={data.IconTypography.type.circle}
      />
    </div>
  )
}

export default IconTypographyButton
