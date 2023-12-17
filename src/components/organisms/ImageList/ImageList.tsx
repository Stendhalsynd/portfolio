import React from "react"

import { useRecoilValue } from "recoil"
import { isMobileState } from "src/recoil"

import { Image } from "@atoms/index"

import { List } from "@molecules/index"

import html from "@image/img_html.png"
import css from "@image/img_css.png"
import js from "@image/img_javascript.png"
import ts from "@image/img_typescript.png"
import sass from "@image/img_sass.png"
import redux from "@image/img_redux.png"
import react from "@image/img_react.svg"
import recoil from "@image/img_recoil.svg"
import next from "@image/img_next.svg"
import reacthookform from "@image/img_react_hook_form.svg"
import eslint from "@image/img_eslint.svg"
import prettier from "@image/img_prettier.svg"
import storybook from "@image/img_storybook.svg"
import chromatic from "@image/img_chromatic.svg"
import styledcomponent from "@image/img_styled_component.svg"
import openvidu from "@image/img_openvidu.png"
import mui from "@image/img_mui.png"
import webrtc from "@image/img_webrtc.png"

import python from "@image/img_python.png"
import java from "@image/img_java.png"
import go from "@image/img_go.png"
import nest from "@image/img_nestjs.png"
import sequelize from "@image/img_sequelize.png"
import gorm from "@image/img_gorm.png"
import grpc from "@image/img_grpc.png"
import typeorm from "@image/img_typeorm.svg"
import springboot from "@image/img_springboot.svg"
import mysql from "@image/img_mysql.svg"

import ec2 from "@image/img_ec2.png"
import docker from "@image/img_docker.png"
import pm2 from "@image/img_pm2.svg"
import netlify from "@image/img_netlify.svg"
import gitlab_cicd from "@image/img_gitlab_cicd.png"
import github_action from "@image/img_github_action.svg"
import vercel from "@image/img_vercel.svg"

import fork from "@image/img_fork.png"
import git from "@image/img_git.png"
import gitlab from "@image/img_gitlab.png"
import github from "@image/img_github.png"

import notion from "@image/img_notion.png"
import jira from "@image/img_jira.png"
import slack from "@image/img_slack.png"
import figma from "@image/img_figma.png"

interface ImageListProps {
  images: string[]
  variant:
    | "frontend"
    | "backend"
    | "deployment"
    | "versioncontrol"
    | "communication"
}

const ImageList: React.FC<ImageListProps> = ({ images, variant }) => {
  const isMobile = useRecoilValue(isMobileState)

  let height = isMobile ? 35 : 75
  let gap = isMobile ? "13px" : "25px"
  let justifyContent =
    variant === "frontend" ||
    variant === "deployment" ||
    variant === "communication"
      ? "flex-start"
      : "flex-end"

  let imagePaths: Record<string, string> = {}

  switch (variant) {
    case "frontend":
      imagePaths = {
        html,
        css,
        js,
        ts,
        sass,
        redux,
        react,
        recoil,
        next,
        reacthookform,
        eslint,
        prettier,
        storybook,
        chromatic,
        styledcomponent,
        openvidu,
        mui,
        webrtc,
      }
      break
    case "backend":
      imagePaths = {
        python,
        java,
        go,
        nest,
        sequelize,
        gorm,
        grpc,
        typeorm,
        springboot,
        mysql,
      }
      break
    case "deployment":
      imagePaths = {
        ec2,
        docker,
        pm2,
        netlify,
        gitlab_cicd,
        github_action,
        vercel,
      }
      break
    case "versioncontrol":
      imagePaths = {
        fork,
        git,
        gitlab,
        github,
      }
      break
    case "communication":
      imagePaths = {
        notion,
        jira,
        slack,
        figma,
      }
      break
    default:
      break
  }

  return (
    <List ordered={false} gap={gap} justifyContent={justifyContent}>
      {images.map((imagePath, index) => (
        <li key={index}>
          <Image src={imagePaths[imagePath]} height={height} alt={imagePath} />
        </li>
      ))}
    </List>
  )
}

export default ImageList
