import React, { CSSProperties, ReactNode } from "react"

import { Area, ImageList } from "@organisms/index"
import { LabelButton } from "@molecules/index"

import data from "@data"

interface AreaContainerProps {
  variant: "left" | "right"
  type:
    | "frontend"
    | "backend"
    | "deployment"
    | "versioncontrol"
    | "communication"
  style?: CSSProperties
}

const AreaContainer: React.FC<AreaContainerProps> = ({
  variant,
  type,
  style,
}) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    marginTop: "29px",
    alignItems: variant === "left" ? "flex-start" : "flex-end",
    ...style,
  }

  const areaStyle: CSSProperties = {
    width: "fit-content",
    maxWidth: "50vw",
    marginTop: "13.47px",
  }

  let areaContainerContent: ReactNode

  switch (type) {
    case "frontend":
      areaContainerContent = (
        <div style={containerStyle}>
          <LabelButton
            content={data.LabelButton.font.frontend}
            variant={"font"}
            style={{ transform: "rotate(-10.194deg)" }}
          />
          <Area style={areaStyle}>
            <ImageList images={data.ImageList.frontend} variant="frontend" />
          </Area>
        </div>
      )
      break
    case "backend":
      areaContainerContent = (
        <div style={containerStyle}>
          <LabelButton
            content={data.LabelButton.font.backend}
            variant={"font"}
            style={{ transform: "rotate(10.194deg)" }}
          />
          <Area style={areaStyle}>
            <ImageList images={data.ImageList.backend} variant="backend" />
          </Area>
        </div>
      )
      break
    case "deployment":
      areaContainerContent = (
        <div style={containerStyle}>
          <LabelButton
            content={data.LabelButton.font.deployment}
            variant={"font"}
            style={{ transform: "rotate(-10.194deg)" }}
          />
          <Area style={areaStyle}>
            <ImageList
              images={data.ImageList.deployment}
              variant="deployment"
            />
          </Area>
        </div>
      )
      break
    case "versioncontrol":
      areaContainerContent = (
        <div style={containerStyle}>
          <LabelButton
            content={data.LabelButton.font.versioncontrol}
            variant={"font"}
            style={{ transform: "rotate(10.194deg)" }}
          />
          <Area style={areaStyle}>
            <ImageList
              images={data.ImageList.versioncontrol}
              variant="versioncontrol"
            />
          </Area>
        </div>
      )
      break
    case "communication":
      areaContainerContent = (
        <div style={containerStyle}>
          <LabelButton
            content={data.LabelButton.font.communication}
            variant={"font"}
            style={{ transform: "rotate(-10.194deg)" }}
          />
          <Area style={areaStyle}>
            <ImageList
              images={data.ImageList.communication}
              variant="communication"
            />
          </Area>
        </div>
      )
      break
  }

  return areaContainerContent
}

export default AreaContainer
