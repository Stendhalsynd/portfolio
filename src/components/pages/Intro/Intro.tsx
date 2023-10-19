import React, { useEffect } from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import Lottie from "react-lottie-player"

import styled from "styled-components"

import { Image, Typography } from "@atoms/index"
import { Label, LabelButton } from "@molecules/index"
import { Container } from "@organisms/index"

import color from "@color"
import data from "@data"

import myImage from "@image/img_myImage.png"

import arrowDownLottie from "../../../static/lotties/lottie_arrow_down.json"
import webLottie from "../../../static/lotties/lottie_web.json"

import AOS from "aos"
import "aos/dist/aos.css"

const TypographyWrapper = styled.div`
  width: 70vw;
  align-self: flex-start;
  position: relative;
  margin-top: 30px;
  max-width: 1200px;
`

const Intro: React.FC = () => {
  const isMobile = useRecoilValue(isMobileState)

  useEffect(() => {
    AOS.init()
  }, [])

  let typoVariant = isMobile ? "bungee5" : "bungee75"
  let buttonVariant = isMobile ? "double" : "bigdouble"
  let imageHeight = isMobile ? 336 : 473
  let iconTop = isMobile ? "457px" : "722px"

  return (
    <Container variant="column" style={{ background: color.white, zIndex: 1 }}>
      <Container variant="column">
        <TypographyWrapper>
          <Label
            dataAos="fade-right"
            dataAosOffset="200"
            dataAosEasing="ease-in-sine"
            dataAosDuration="500"
          >
            <Typography variant={typoVariant} color={color.black2}>
              {data.Intro.name.lastname}&nbsp;
            </Typography>
            <Typography variant={typoVariant} color={color.black1}>
              {data.Intro.name.firstname}
            </Typography>
          </Label>
          <Label
            dataAos="fade-right"
            dataAosOffset="400"
            dataAosEasing="ease-in-sine"
            dataAosDuration="800"
          >
            <Typography variant={typoVariant} color={color.black3}>
              {data.Intro.area}
            </Typography>
          </Label>
          <Label
            dataAos="fade-right"
            dataAosOffset="600"
            dataAosEasing="ease-in-sine"
            dataAosDuration="1100"
          >
            <Typography variant={typoVariant} color={color.black4}>
              {data.Intro.job}
            </Typography>
          </Label>
        </TypographyWrapper>

        <Container
          variant={isMobile ? "row-reverse" : "row"}
          style={{
            width: "80vw",
            justifyContent: "space-between",
            maxWidth: "1100px",
          }}
        >
          {!isMobile && (
            <Lottie
              loop
              animationData={webLottie}
              play
              style={{
                width: 330,
                height: 330,
                top: 480,
              }}
            />
          )}

          <Container
            variant="column"
            style={{
              position: "relative",
              alignSelf: "flex-end",
              right: "-30px",
            }}
          >
            <LabelButton
              variant={buttonVariant}
              style={{
                zIndex: 1,
                animation: "moveUpDown 1.5s ease infinite",
                top: "16px",
                right: "-30px",
              }}
            />
            <Image
              src={myImage}
              height={imageHeight}
              style={{
                alignSelf: "flex-end",
                position: "relative",
                bottom: "-10px",
              }}
            />
          </Container>
        </Container>
      </Container>

      <Lottie
        loop
        animationData={arrowDownLottie}
        play
        style={{
          width: 130,
          height: 130,
          position: "absolute",
          top: iconTop,
          left: "calc(50% - 20vw)",
        }}
      />
    </Container>
  )
}

export default Intro
