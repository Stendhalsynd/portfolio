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
      style={{ width: "90vw", maxWidth: "1200px" }}
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
