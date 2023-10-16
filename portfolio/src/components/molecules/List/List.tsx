import React, { CSSProperties, ReactNode } from "react"
import styled, { css } from "styled-components"
import { FlexDirection } from "src/static/styles"

const listStyles = css`
  font-family: "bungee2";
  line-height: 1.7rem;
  color: black;
  display: flex;
  flex-wrap: wrap;
`

const Ol = styled.ol`
  ${listStyles}
`
const Ul = styled.ul`
  ${listStyles}
`

interface ListProps {
  ordered?: boolean
  children: ReactNode
  reverse?: boolean
  gap?: string
  justifyContent?: string
  flexDirection?: FlexDirection
  style?: CSSProperties
}

const List: React.FC<ListProps> = ({
  ordered,
  children,
  gap,
  justifyContent,
  flexDirection,
  style,
}) => {
  const ListComponent = ordered ? Ol : Ul
  return (
    <ListComponent style={{ ...style, gap, flexDirection, justifyContent }}>
      {children}
    </ListComponent>
  )
}

export default List
