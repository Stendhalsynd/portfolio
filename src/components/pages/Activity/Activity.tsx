import React, { CSSProperties, useEffect } from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import { Typography } from "@atoms/index"
import { LabelButton, Label } from "@molecules/index"
import { Container } from "@organisms/index"

import data from "@data"
import color from "@color"

import background from "@image/img_background.png"

import AOS from "aos"
import "aos/dist/aos.css"

interface ActivitySectionProps {
  style?: CSSProperties
}

const Activity: React.FC = () => {
  const isMobile = useRecoilValue(isMobileState)

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Container
      variant="column"
      style={{
        backgroundImage: `url(${background})`,
        background: "center center cover repeat",
        backgroundSize: "50% auto",
        padding: "40px 6vw",
        animation: "moveBackground 3600s linear infinite",
        paddingBottom: "80px",
      }}
    >
      <Container variant="column" style={{ width: "100%", maxWidth: "1400px" }}>
        <LabelButton
          content={data.LabelButton.default.activity}
          variant={isMobile ? "default" : "bigdefault"}
          style={{ marginBottom: "53px", alignSelf: "center" }}
        />
        <Container
          variant="column"
          style={{ alignItems: "flex-start", width: "100%" }}
        >
          <ActivitySection />
        </Container>
      </Container>
    </Container>
  )
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ style }) => {
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
        dataAos="fade-up"
        dataAosDuration="500"
        style={{
          width: "420px",
        }}
      >
        <Typography
          variant={isMobile ? "bungee36" : "bungee5"}
          color={color.lightlime}
        >
          {data.Activity.group}
        </Typography>
      </Label>
      <Container
        variant="column"
        style={{
          alignItems: "flex-start",
          width: isMobile ? 420 : "45vw",
          paddingBottom: "30px",
        }}
      >
        <Label
          dataAos="fade-up"
          dataAosDuration="500"
          style={{
            padding: "10px 0",
          }}
        >
          <Typography
            variant={isMobile ? "bungee4" : "bungee"}
            color={color.white}
          >
            {data.Activity.period}
          </Typography>
        </Label>
        <Label dataAos="fade-up" dataAosDuration="500">
          <Typography
            variant={isMobile ? "bungee4title" : "bungee"}
            color={color.yellow}
          >
            {data.Activity.area}
          </Typography>
        </Label>
      </Container>
    </Container>
  )
}

export default Activity
