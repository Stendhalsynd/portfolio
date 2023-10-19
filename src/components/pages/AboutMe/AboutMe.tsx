import React, { useEffect } from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import Lottie from "react-lottie-player"

import { Image, Typography } from "@atoms/index"
import { Label, LabelButton, HyperLink } from "@molecules/index"
import { Container } from "@organisms/index"

import color from "@color"
import data from "@data"
import styles from "@style"
import font from "@font"

import avatar from "@image/img_avatar.png"

import paperPlaneLottie from "../../../static/lotties/lottie_paperplane.json"

import AOS from "aos"
import "aos/dist/aos.css"

const AboutMe: React.FC = () => {
  const isMobile = useRecoilValue(isMobileState)

  useEffect(() => {
    AOS.init()
  }, [])

  const containerPadding = isMobile ? "45px" : "50px 4vw"
  const emailVariant = isMobile ? "icon_email" : "icontypo_email"
  const githubVariant = isMobile ? "icon_github" : "icontypo_github"
  const velogVariant = isMobile ? "icon_velog" : "icontypo_velog"

  return (
    <Container
      variant="column"
      style={{ background: color.lime, padding: "50px 35px" }}
    >
      {/* <div data-aos="fade-up" style={{ border: "5px solid red" }}>
        test
      </div> */}
      <Container variant="column" style={{ maxWidth: "1200px" }}>
        <LabelButton
          variant="default"
          content={data.LabelButton.default.aboutme}
        />
        <Container
          variant="column"
          style={{
            background: color.white,
            borderRadius: styles.borderRadius.br30,
            padding: containerPadding,
            marginTop: styles.margin.mg50,
          }}
        >
          <Container variant={isMobile ? "column" : "row"}>
            <Container variant="column" style={{ position: "relative" }}>
              <Image
                src={avatar}
                height={isMobile ? 177 : 210}
                style={{ maxHeight: "330px" }}
              />
              <Lottie
                loop
                animationData={paperPlaneLottie}
                play
                style={{
                  width: 200,
                  height: 130,
                  position: "absolute",
                  top: "-19px",
                  left: "-53px",
                }}
              />
            </Container>
            <Container
              variant="column"
              style={{ alignItems: "flex-start", padding: "10vw 0" }}
            >
              {data.Container.Label.map((label, labelIndex) => (
                <Label
                  dataAos="fade-up"
                  dataAosDuration="1000"
                  key={labelIndex}
                  style={{ padding: "10px 1.5vw" }}
                >
                  {label.Typography.map((text, textIndex) => (
                    <Typography
                      key={textIndex}
                      variant={isMobile ? font.title1 : font.headline3}
                      color={textIndex % 2 === 0 ? color.black1 : color.red60}
                    >
                      {text}&nbsp;
                    </Typography>
                  ))}
                </Label>
              ))}
            </Container>
          </Container>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <HyperLink to="mailto:h29jihun@gmail.com" variant={emailVariant} />
            <HyperLink
              to="https://github.com/Stendhalsynd/"
              variant={githubVariant}
            />
            <HyperLink to="https://velog.io/@qmflf556" variant={velogVariant} />
          </div>
        </Container>
      </Container>
    </Container>
  )
}

export default AboutMe
