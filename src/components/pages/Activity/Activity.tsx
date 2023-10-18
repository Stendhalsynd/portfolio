import React, { CSSProperties } from "react"

import { Typography } from "@atoms/index"
import { LabelButton, Label } from "@molecules/index"
import { Container } from "@organisms/index"

import data from "@data"
import color from "@color"

import background from "@image/img_background.png"

interface ActivitySectionProps {
  style?: CSSProperties
}

const Activity: React.FC = () => {
  return (
    <Container
      variant="column"
      style={{
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "contain",
        padding: "40px 10vw",
        alignItems: "flex-start",
      }}
    >
      <LabelButton
        content={data.LabelButton.default.activity}
        variant={"default"}
        style={{ marginBottom: "53px", alignSelf: "center" }}
      />
      <Container variant="column" style={{ alignItems: "flex-start" }}>
        <ActivitySection />
      </Container>
    </Container>
  )
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ style }) => (
  <Container variant="column" style={{ ...style, alignItems: "flex-start" }}>
    <Label>
      <Typography variant="bungee36" color={color.lightlime}>
        {data.Activity.group}
      </Typography>
    </Label>
    <Label>
      <Typography variant="bungee4" color={color.white}>
        {data.Activity.period}
      </Typography>
    </Label>
    <Label>
      <Typography variant="bungee4title" color={color.yellow}>
        {data.Activity.area}
      </Typography>
    </Label>
  </Container>
)

export default Activity
