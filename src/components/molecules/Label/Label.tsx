import React, { ReactNode } from "react"

interface LabelProps {
  children: ReactNode
  style?: React.CSSProperties
}

const Label: React.FC<LabelProps> = ({ children, style }) => {
  return <p style={{ ...style, wordBreak: "keep-all" }}>{children}</p>
}

export default Label
