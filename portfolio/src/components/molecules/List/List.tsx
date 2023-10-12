import React, { ReactNode } from "react"
import styled, { css } from "styled-components"

const listStyles = css`
  font-family: "bungee2";
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: "black";
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
  palette?: string
  reverse?: boolean
}

const List: React.FC<ListProps> = ({ ordered, children }) => {
  const ListComponent = ordered ? Ol : Ul
  return <ListComponent>{children}</ListComponent>
}

export default List
