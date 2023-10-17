import React from "react"

import { Typography } from "@atoms/index"
import {
  Label,
  HyperLink,
  LabelButton,
  IconTypographyButton,
} from "@molecules/index"
import { Area, Container } from "@organisms/index"

import data from "@data"
import color from "@color"

interface ProjectsProps {
  index?: number
  length?: number
  title?: string
}

const Projects: React.FC<ProjectsProps> = ({ index, length, title }) => {
  const containerStyle = {
    height: "140vh",
    background: color.black5,
    padding: "45px 45px 23px",
  }

  return (
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
        style={{ width: "100%", alignItems: "flex-start", marginTop: "30px" }}
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
        <Label style={{ padding: "10px 0" }}>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[0].Typography[0]}
          </Typography>
          <Typography variant="headline3" color={color.red60}>
            {data.Area[0].Label[0].Typography[1]}
          </Typography>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[0].Typography[2]}
          </Typography>
        </Label>
        <Label style={{ padding: "10px 0" }}>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[1].Typography[0]}
          </Typography>
          <Typography variant="headline3" color={color.red60}>
            {data.Area[0].Label[1].Typography[1]}
          </Typography>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[1].Typography[2]}
          </Typography>
        </Label>
        <Label style={{ padding: "10px 0" }}>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[2].Typography[0]}
          </Typography>
          <Typography variant="headline3" color={color.red60}>
            {data.Area[0].Label[2].Typography[1]}
          </Typography>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[2].Typography[2]}
          </Typography>
        </Label>
        <Label style={{ padding: "10px 0" }}>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[3].Typography[0]}
          </Typography>
          <Typography variant="headline3" color={color.red60}>
            {data.Area[0].Label[3].Typography[1]}
          </Typography>
          <Typography variant="title1" color={color.black1}>
            {data.Area[0].Label[3].Typography[2]}
          </Typography>
        </Label>
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
              to={data.HyperLink.deployDomain[0]}
              variant="typo"
              colors="green"
            />
          </div>
        </Container>
      </Container>
    </Container>
  )
}

export default Projects
