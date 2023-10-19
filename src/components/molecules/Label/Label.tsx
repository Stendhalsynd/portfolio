import React, { ReactNode, useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"

interface LabelProps {
  children: ReactNode
  dataAos?: string
  dataAosDuration?: string
  dataAosOffset?: string
  dataAosEasing?: string
  style?: React.CSSProperties
}

const Label: React.FC<LabelProps> = ({
  children,
  dataAos,
  dataAosDuration,
  dataAosOffset,
  dataAosEasing,
  style,
}) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <p
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-offset={dataAosOffset}
      data-aos-easing={dataAosEasing}
      style={{ ...style, wordBreak: "keep-all" }}
    >
      {children}
    </p>
  )
}

export default Label
