import React, { CSSProperties } from "react"

import { Typography } from "@atoms/index"
import { LabelButton, Label } from "@molecules/index"
import { Container } from "@organisms/index"

import data from "@data"
import color from "@color"

import background from "@image/img_background.png"

interface CareerSectionProps {
  index: number
  style?: CSSProperties
}

const Career: React.FC = () => {
  return (
    <Container
      variant="column"
      style={{
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "contain",
        padding: "40px 10vw",
      }}
    >
      <LabelButton
        content={data.LabelButton.default.carrer}
        variant={"default"}
        style={{ marginBottom: "53px" }}
      />
      <Container variant="column" style={{ alignItems: "flex-start" }}>
        <CareerSection index={0} />
        <CareerSection index={1} style={{ marginTop: "20px" }} />
      </Container>
    </Container>
  )
}

const CareerSection: React.FC<CareerSectionProps> = ({ index, style }) => (
  <Container variant="column" style={{ ...style, alignItems: "flex-start" }}>
    <Label>
      <Typography variant="bungee36" color={color.lightlime}>
        {data.Career[index].group}
      </Typography>
    </Label>
    <Label>
      <Typography variant="bungee4" color={color.white}>
        {data.Career[index].period}
      </Typography>
    </Label>
    <Label>
      <Typography variant="bungee4title" color={color.yellow}>
        {data.Career[index].area}
      </Typography>
    </Label>
  </Container>
)

export default Career
