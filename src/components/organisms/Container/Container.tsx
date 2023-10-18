import React, { CSSProperties, ReactNode } from "react"

import styled from "styled-components"

import style from "@style"

interface ContainerProps {
  children: ReactNode
  variant: "column" | "row"
  style?: CSSProperties
}

const StyledContainer = styled.div<ContainerProps>`
  display: ${style.display.flex};
  align-items: ${style.flex.alignItems.center};
  flex-direction: ${(props) => (props.variant === "row" ? "row" : "column")};
`

const Container: React.FC<ContainerProps> = ({ children, variant, style }) => {
  return (
    <StyledContainer variant={variant} style={style}>
      {children}
    </StyledContainer>
  )
}

export default Container
