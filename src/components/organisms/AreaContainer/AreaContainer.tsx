import React, { CSSProperties, ReactNode } from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

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
  const isMobile = useRecoilValue(isMobileState)

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    marginTop: "29px",
    alignItems: variant === "left" ? "flex-start" : "flex-end",
    maxWidth: "1200px",
    ...style,
  }

  const areaStyle: CSSProperties = {
    width: "fit-content",
    maxWidth: "43vw",
    marginTop: "13.47px",
  }

  let areaContainerContent: ReactNode

  switch (type) {
    case "frontend":
      areaContainerContent = (
        <div style={containerStyle}>
          <LabelButton
            content={data.LabelButton.font.frontend}
            variant={isMobile ? "font" : "bigfont"}
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
            variant={isMobile ? "font" : "bigfont"}
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
            variant={isMobile ? "font" : "bigfont"}
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
            variant={isMobile ? "font" : "bigfont"}
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
            variant={isMobile ? "font" : "bigfont"}
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
