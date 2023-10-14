import React, { ReactNode } from "react"
import styled from "styled-components"

import { Icon, Typography } from "@atoms/index"

import email from "@icon/icon_email.png"
import github from "@icon/icon_github.png"
import velog from "@icon/icon_velog.png"

import data from "@data"
import color from "@color"
import styles from "@style"

interface HyperLinkProps {
  to: string
  variant:
    | "icon_email"
    | "icon_github"
    | "icon_velog"
    | "typo"
    | "icontypo_email"
    | "icontypo_github"
    | "icontypo_velog"
}

const defaultStyle = {
  padding: "8px 23px",
  borderRadius: styles.borderRadius.br20,
  background: color.red50,
}

const HyperLink: React.FC<HyperLinkProps> = ({ to, variant }) => {
  let hyperLinkContent: ReactNode

  switch (variant) {
    case "icon_email":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle }}>
          <Icon src={email} />
        </a>
      )
      break
    case "icon_github":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle }}>
          <Icon src={github} />
        </a>
      )
      break
    case "icon_velog":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle }}>
          <Icon src={velog} />
        </a>
      )
      break
    case "typo":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle, background: color.green }}>
          <Typography variant="title2">{data.HyperLink.domain}</Typography>
        </a>
      )
      break
    case "icontypo_email":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle }}>
          <Icon src={email} />
          <Typography variant="title2" color={color.white}>
            {data.HyperLink.email}
          </Typography>
        </a>
      )
      break
    case "icontypo_github":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle }}>
          <Icon src={github} />
          <Typography variant="title2" color={color.white}>
            {data.HyperLink.github}
          </Typography>
        </a>
      )
      break
    case "icontypo_velog":
      hyperLinkContent = (
        <a href={to} style={{ ...defaultStyle }}>
          <Icon src={velog} />
          <Typography variant="title2" color={color.white}>
            {data.HyperLink.velog}
          </Typography>
        </a>
      )
      break
  }

  return hyperLinkContent
}

export default HyperLink
