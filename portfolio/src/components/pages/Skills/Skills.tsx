import React from "react"

import { LabelButton } from "@molecules/index"
import { Container, Area, ImageList, AreaContainer } from "@organisms/index"

import color from "@color"
import data from "@data"
import styles from "@style"
import font from "@font"

import background from "@image/img_background.png"

const Skills: React.FC = () => {
  return (
    <Container
      variant="column"
      style={{
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "contain",
        padding: "40px 27px",
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
      {/* <Area>
        <ImageList images={data.ImageList.frontend} variant="frontend" />
      </Area>
      <Area>
        <ImageList images={data.ImageList.backend} variant="backend" />
      </Area>
      <Area>
        <ImageList images={data.ImageList.deployment} variant="deployment" />
      </Area>
      <Area>
        <ImageList
          images={data.ImageList.versioncontrol}
          variant="versioncontrol"
        />
      </Area>
      <Area>
        <ImageList
          images={data.ImageList.communication}
          variant="communication"
        />
      </Area> */}
    </Container>
  )
}

export default Skills