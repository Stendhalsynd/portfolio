import React, { ReactNode } from "react"

interface LabelProps {
  children: ReactNode
  style?: React.CSSProperties
}

const Label: React.FC<LabelProps> = ({ children, style }) => {
  return <p style={style}>{children}</p>
}

export default Label
