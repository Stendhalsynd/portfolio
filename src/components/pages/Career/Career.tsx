import React, { CSSProperties } from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

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
  const isMobile = useRecoilValue(isMobileState)

  return (
    <Container
      variant="column"
      style={{
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "50% auto",
        padding: "40px 6vw",
        animation: "moveBackground 3600s linear infinite",
      }}
    >
      <Container variant="column" style={{ width: "100%", maxWidth: "1400px" }}>
        <LabelButton
          content={data.LabelButton.default.carrer}
          variant={isMobile ? "default" : "bigdefault"}
          style={{ marginBottom: "53px", alignSelf: "center" }}
        />
        <Container
          variant="column"
          style={{ alignItems: "flex-start", width: "100%" }}
        >
          <CareerSection index={0} />
          <CareerSection index={1} style={{ marginTop: "20px" }} />
        </Container>
      </Container>
    </Container>
  )
}

const CareerSection: React.FC<CareerSectionProps> = ({ index, style }) => {
  const isMobile = useRecoilValue(isMobileState)

  return (
    <Container
      variant={isMobile ? "column" : "row"}
      style={{
        ...style,
        justifyContent: isMobile ? "center" : "space-between",
        width: "100%",
      }}
    >
      <Label
        style={{
          width: "420px",
        }}
      >
        <Typography
          variant={isMobile ? "bungee36" : "bungee5"}
          color={color.lightlime}
        >
          {data.Career[index].group}
        </Typography>
      </Label>
      <Container
        variant="column"
        style={{
          alignItems: "flex-start",
          width: isMobile ? 420 : "45vw",
        }}
      >
        <Label
          style={{
            padding: "10px 0",
          }}
        >
          <Typography
            variant={isMobile ? "bungee4" : "bungee"}
            color={color.white}
          >
            {data.Career[index].period}
          </Typography>
        </Label>
        <Label>
          <Typography
            variant={isMobile ? "bungee4title" : "bungee"}
            color={color.yellow}
          >
            {data.Career[index].area}
          </Typography>
        </Label>
      </Container>
    </Container>
  )
}

export default Career
