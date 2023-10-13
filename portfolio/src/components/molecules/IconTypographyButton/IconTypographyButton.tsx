import React from "react"
import { IconTypography } from "@molecules/index"

import data from "@data"

interface IconTypographyButtonProps {
  content: string
}

const IconTypographyButton: React.FC<IconTypographyButtonProps> = ({
  content,
}) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <IconTypography
        content={content}
        type={data.IconTypography.type.circle}
      />
    </div>
  )
}

export default IconTypographyButton
