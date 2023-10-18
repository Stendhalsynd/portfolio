import React from "react"
import "./background.css"

import { Divider } from "@atoms/index"
import { LabelButton } from "@molecules/index"
import { Container, AreaContainer, IconTypographyList } from "@organisms/index"

import data from "@data"

import background from "@image/img_background.png"

const Skills: React.FC = () => {
  return (
    <Container
      variant="column"
      style={{
        position: "relative",
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "50% auto",
        padding: "40px 27px",
        animation: "moveBackground 20s linear infinite",
      }}
    >
      <LabelButton
        content={data.LabelButton.default.skills}
        variant={"default"}
        style={{ marginBottom: "53px" }}
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
