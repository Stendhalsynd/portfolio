import React from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import { Image, Typography } from "@atoms/index"
import { Label, LabelButton, HyperLink } from "@molecules/index"
import { Container } from "@organisms/index"

import color from "@color"
import data from "@data"
import styles from "@style"
import font from "@font"

import avatar from "@image/img_avatar.png"

const AboutMe: React.FC = () => {
  const isMobile = useRecoilValue(isMobileState)
  const containerPadding = isMobile ? "45px" : styles.padding.pd10vw
  const emailVariant = isMobile ? "icon_email" : "icontypo_email"
  const githubVariant = isMobile ? "icon_github" : "icontypo_github"
  const velogVariant = isMobile ? "icon_velog" : "icontypo_velog"

  return (
    <Container
      variant="column"
      style={{ background: color.lime, padding: "50px 35px" }}
    >
      <Container variant="column">
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
          <Image src={avatar} height={177} />
          <Container
            variant="column"
            style={{ alignItems: "flex-start", padding: "30px 0" }}
          >
            {data.Container.Label.map((label, labelIndex) => (
              <Label key={labelIndex} style={{ padding: "10px 0" }}>
                {label.Typography.map((text, textIndex) => (
                  <Typography
                    key={textIndex}
                    variant={font.title1}
                    color={textIndex % 2 === 0 ? color.black1 : color.red60}
                  >
                    {text}&nbsp;
                  </Typography>
                ))}
              </Label>
            ))}
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
