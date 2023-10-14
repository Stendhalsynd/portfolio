import React from "react"

import { Image, Icon, Typography } from "@atoms/index"
import { Label, LabelButton } from "@molecules/index"
import { Container } from "@organisms/index"

import color from "@color"
import data from "@data"
import styles from "@style"

import myImage from "@image/img_myImage.png"
import vector from "@icon/icon_vector.png"

const textStyle = {
  width: "fit-content",
  alignItems: "flex-start",
  margin: "50px 35px 0",
}

const Intro: React.FC = () => {
  return (
    <Container variant="column">
      <Container variant="column" style={textStyle}>
        <Label>
          <Typography variant="bungee5" color={color.black2}>
            {data.Intro.name.lastname}&nbsp;
          </Typography>
          <Typography variant="bungee5" color={color.black1}>
            {data.Intro.name.firstname}
          </Typography>
        </Label>
        <Label>
          <Typography variant="bungee5" color={color.black3}>
            {data.Intro.area}
          </Typography>
        </Label>
        <Label>
          <Typography variant="bungee5" color={color.black4}>
            {data.Intro.job}
          </Typography>
        </Label>
      </Container>
      <LabelButton
        variant="double"
        pos={styles.position.absolute.right}
        top={235}
        right={5}
        style={{ zIndex: 1 }}
      />
      <Container
        variant="column"
        style={{
          width: "calc(100% - 246px)",
          position: "absolute",
          top: "515px",
          left: "0",
        }}
      >
        <Icon src={vector} size={data.Icon.size.vector} />
      </Container>
      <Image
        src={myImage}
        height={336}
        style={{
          alignSelf: "flex-end",
          marginTop: "46px",
          position: "relative",
          bottom: "-10px",
        }}
      />
    </Container>
  )
}

export default Intro
