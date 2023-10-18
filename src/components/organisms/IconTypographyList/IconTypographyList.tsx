import React from "react"

import { List, IconTypography } from "@molecules/index"

interface IconTypographyListProps {
  contents: string[]
}

const IconTypographyList: React.FC<IconTypographyListProps> = ({
  contents,
}) => {
  return (
    <List
      ordered={false}
      flexDirection="column"
      style={{ alignSelf: "flex-start" }}
    >
      {contents.map((content, index) => (
        <li key={index}>
          <IconTypography content={content} />
        </li>
      ))}
    </List>
  )
}

export default IconTypographyList
