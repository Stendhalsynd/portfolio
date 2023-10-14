import React, { CSSProperties, ReactNode } from "react"
import styled, { css } from "styled-components"

const listStyles = css`
  font-family: "bungee2";
  margin: 1rem 0;
  padding-left: 1.6rem;
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
  style?: CSSProperties
}

const List: React.FC<ListProps> = ({ ordered, children, style }) => {
  const ListComponent = ordered ? Ol : Ul
  return <ListComponent style={{ ...style }}>{children}</ListComponent>
}

export default List
