import React from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import { Typography } from "@atoms/index"
import { Label } from "@molecules/index"

import color from "@color"
import data from "@data"

const Footer: React.FC = () => {
  const isMobile = useRecoilValue(isMobileState)

  const typographyStyle = {
    padding: "10px",
    display: "inline-block",
    WebkitTextStroke: "2px black",
    color: color.yellow,
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
        <Typography
          variant={isMobile ? "bungee4" : "bungee"}
          style={typographyStyle}
        >
          {data.Footer}
        </Typography>
      </Label>
    </div>
  )
}

export default Footer
