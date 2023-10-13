import React, { ReactNode } from "react"

interface LabelProps {
  children: ReactNode
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <p>{children}</p>
}

export default Label
