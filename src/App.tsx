import React, { useEffect } from "react"

import { useSetRecoilState } from "recoil"
import { isMobileState, currentWidthState } from "./recoil"

import "./App.css"
import { Footer } from "@organisms/index"
import {
  Intro,
  AboutMe,
  Skills,
  Projects,
  Career,
  Activity,
} from "@pages/index"

function App() {
  const setMobileState = useSetRecoilState(isMobileState)
  const setCurrentWidthState = useSetRecoilState(currentWidthState)

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth
      setMobileState(newWidth < 780)
      setCurrentWidthState(newWidth)
    }

    handleResize() // 초기 렌더링 시 설정
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setMobileState, setCurrentWidthState])

  return (
    <>
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <Career />
      <Activity />
      <Footer />
    </>
  )
}

export default App
