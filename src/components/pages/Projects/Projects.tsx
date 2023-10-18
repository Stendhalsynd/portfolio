import React from "react"

import { Typography, Image } from "@atoms/index"
import {
  Label,
  HyperLink,
  LabelButton,
  IconTypographyButton,
} from "@molecules/index"
import { Area, Container } from "@organisms/index"

import beautylab from "@image/img_project1_screen1.png"
import doit from "@image/img_project2_screen1.png"

import data from "@data"
import color from "@color"

interface ProjectsProps {
  index?: number
  length?: number
  title?: string
}

interface LabelData {
  Typography: string[]
}

interface HyperLinkSectionProps {
  domain: number
}

const renderLabelBlock = (labelData: LabelData[]) => {
  return labelData.map((label, index) => (
    <Label style={{ padding: "10px 0" }} key={index}>
      <Typography variant="title1" color={color.black1}>
        {label.Typography[0]}
      </Typography>
      <Typography variant="headline3" color={color.red60}>
        {label.Typography[1]}
      </Typography>
      <Typography variant="title1" color={color.black1}>
        {label.Typography[2]}
      </Typography>
    </Label>
  ))
}

const Projects: React.FC<ProjectsProps> = ({ index, length, title }) => {
  const containerStyle = {
    height: "fit-content",
    background: color.black5,
    padding: "45px 45px 23px",
    width: "100vw",
  }

  return (
    <Container variant="column">
      {/* 1번 프로젝트 Beauty Lab */}
      <Container
        variant="column"
        style={{
          background: color.white,
          borderBottom: `15px solid ${color.lime}`,
        }}
      >
        <Container
          variant="column"
          style={{ ...containerStyle, boxSizing: "border-box" }}
        >
          <LabelButton
            content={data.LabelButton.default.skills}
            variant={"lime"}
            style={{ marginBottom: "45px" }}
          />
          <Area
            index={0}
            length={data.Area.length}
            title={data.Area[0].title}
            variant="main_menu"
          />
          <Container
            variant="column"
            style={{
              width: "100%",
              alignItems: "flex-start",
              marginTop: "30px",
            }}
          >
            <Label style={{ padding: "5px 0" }}>
              <Typography variant="title2" color={color.black3}>
                {data.Area[0].period}
              </Typography>
            </Label>
            <Label style={{ padding: "5px 0" }}>
              <Typography variant="title2" color={color.black3}>
                {data.Area[0].scale}
              </Typography>
            </Label>
            {renderLabelBlock(data.Area[0].Label)}
            <Container
              variant="column"
              style={{
                marginTop: "20px",
                alignContent: "space-between",
                width: "100%",
              }}
            >
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.feature}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[0].Skills.feature.label}
                  </Typography>
                </Label>
              </Container>
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.frontend}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[0].Skills.frontend.label}
                  </Typography>
                </Label>
              </Container>
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.deployment}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[0].Skills.deployment.label}
                  </Typography>
                </Label>
              </Container>
              <HyperLinkSection domain={0} />
            </Container>
          </Container>
        </Container>
        <Container
          variant="column"
          style={{
            padding: "31.5px 70px 36.91px",
          }}
        >
          <Area
            index={0}
            length={data.Area.length}
            title={data.Area[0].title}
            variant="sub_menu"
          />
          <Image src={beautylab} height={244} style={{ marginTop: "32px" }} />
        </Container>
      </Container>
      {/* 2번 프로젝트 Do IT */}
      <Container
        variant="column"
        style={{
          background: color.white,
          borderBottom: `15px solid ${color.lime}`,
        }}
      >
        <Container
          variant="column"
          style={{ ...containerStyle, boxSizing: "border-box" }}
        >
          <Area
            index={1}
            length={data.Area.length}
            title={data.Area[1].title}
            variant="main_menu"
          />
          <Container
            variant="column"
            style={{
              width: "100%",
              alignItems: "flex-start",
              marginTop: "30px",
            }}
          >
            <Label style={{ padding: "5px 0" }}>
              <Typography variant="title2" color={color.black3}>
                {data.Area[1].period}
              </Typography>
            </Label>
            <Label style={{ padding: "5px 0" }}>
              <Typography variant="title2" color={color.black3}>
                {data.Area[1].scale}
              </Typography>
            </Label>
            {renderLabelBlock(data.Area[1].Label)}
            <Container
              variant="column"
              style={{
                marginTop: "20px",
                alignContent: "space-between",
                width: "100%",
              }}
            >
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.feature}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[1].Skills.feature.label}
                  </Typography>
                </Label>
              </Container>
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.frontend}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[1].Skills.frontend.label}
                  </Typography>
                </Label>
              </Container>
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.backend}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[1].Skills.backend?.label}
                  </Typography>
                </Label>
              </Container>
              <Container
                variant="row"
                style={{
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "10px 0",
                }}
              >
                <IconTypographyButton
                  content={data.IconTypography.button.deployment}
                />
                <Label style={{ padding: "0 15px", maxWidth: "40vw" }}>
                  <Typography variant="title2">
                    {data.Area[1].Skills.deployment.label}
                  </Typography>
                </Label>
              </Container>
              <HyperLinkSection domain={1} />
            </Container>
          </Container>
        </Container>
        <Container
          variant="column"
          style={{
            padding: "31.5px 70px 36.91px",
          }}
        >
          <Area
            index={1}
            length={data.Area.length}
            title={data.Area[1].title}
            variant="sub_menu"
          />
          <Image src={doit} height={244} style={{ marginTop: "32px" }} />
        </Container>
      </Container>
    </Container>
  )
}

const HyperLinkSection: React.FC<HyperLinkSectionProps> = ({ domain }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      padding: "23px 0",
    }}
  >
    <HyperLink
      to={data.HyperLink.githubUrl}
      variant="icon_github"
      colors="green"
    />
    <HyperLink
      to={data.HyperLink.velogUrl}
      variant="icon_velog"
      colors="green"
    />
    <HyperLink
      to={data.HyperLink.deployDomain[domain]}
      variant="typo"
      colors="green"
    />
  </div>
)

export default Projects
