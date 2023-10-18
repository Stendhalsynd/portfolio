import React from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import "./background.css"

import { Divider } from "@atoms/index"
import { LabelButton } from "@molecules/index"
import { Container, AreaContainer, IconTypographyList } from "@organisms/index"

import data from "@data"

import background from "@image/img_background.png"

const Skills: React.FC = () => {
  const isMobile = useRecoilValue(isMobileState)
  const labelButtonVariant = isMobile ? "default" : "bigdefault"

  return (
    <Container
      variant="column"
      style={{
        position: "relative",
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "50% auto",
        padding: "50px 27px",
        animation: "moveBackground 3600s linear infinite",
      }}
    >
      <LabelButton
        content={data.LabelButton.default.skills}
        variant={labelButtonVariant}
        style={{ marginBottom: "40px" }}
      />
      <AreaContainer variant="left" type="frontend" />
      <AreaContainer variant="right" type="backend" />
      <AreaContainer variant="left" type="deployment" />
      <AreaContainer variant="right" type="versioncontrol" />
      <AreaContainer variant="left" type="communication" />
      <Divider variant="top" />
      <IconTypographyList contents={data.IconTypography.listItem} />
      <Divider variant="bottom" />
    </Container>
  )
}

export default Skills
