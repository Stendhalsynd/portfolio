import React from "react"

import { Typography } from "@atoms/index"
import { Label } from "@molecules/index"
import { Container } from "@organisms/index"

import color from "@color"
import data from "@data"

const Footer: React.FC = () => {
  const typographyStyle = {
    padding: "10px",
    display: "inline-block",
    WebkitTextStroke: "2px black",
    color: color.yellow,
    fontSize: "21px",
    fontWeight: 800,
  }

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Label style={{ padding: "10px", background: color.white }}>
        <Typography variant="bungee2" style={typographyStyle}>
          {data.Footer}
        </Typography>
      </Label>
    </div>
  )
}

export default Footer
