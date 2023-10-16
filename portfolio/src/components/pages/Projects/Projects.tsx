import React from "react"

import { Label, HyperLink } from "@molecules/index"
import { Area } from "@organisms/index"

interface ProjectsProps {
  index?: number
  length?: number
  title?: string
}

const Projects: React.FC<ProjectsProps> = ({ index, length, title }) => {
  return (
    <div>
      <Area variant="main_menu" index={index} length={length} title={title}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <HyperLink to="mailto:h29jihun@gmail.com" variant="icon_email" />
          <HyperLink
            to="https://github.com/Stendhalsynd/"
            variant="icon_github"
          />
          <HyperLink to="https://velog.io/@qmflf556" variant="icon_velog" />
        </div>
      </Area>
    </div>
  )
}

export default Projects
