import React from "react"

type DividerProps = {
  variant: "top" | "bottom"
}

const Divider: React.FC<DividerProps> = ({ variant }) => {
  let marginTop = variant === "top" ? "18px" : "0"
  let marginBottom = variant === "bottom" ? "18px" : "0"

  const dividerStyle: React.CSSProperties = {
    width: "90vw",
    flexShrink: 0,
    padding: "18px 0",
    marginTop,
    marginBottom,
    maxWidth: "1200px",
  }

  const roundedStyle: React.CSSProperties = {
    height: "5px",
    background: "white",
    borderRadius: "10px",
  }

  return (
    <div style={dividerStyle}>
      <div style={roundedStyle} />
    </div>
  )
}

export default Divider
