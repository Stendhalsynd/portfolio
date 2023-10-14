import logo from "./logo.svg"

import { Counter } from "./features/counter/Counter"
import "./App.css"

import { Image, Icon, Typography } from "@atoms/index"
import {
  LabelButton,
  Label,
  HyperLink,
  IconTypography,
  IconTypographyButton,
} from "@molecules/index"
import {
  ImageList,
  IconTypographyList,
  Area,
  Container,
} from "@organisms/index"
import { Intro } from "@pages/index"

import color from "@color"
import data from "@data"
import font from "@font"
import style from "@style"

import avatar from "@image/img_avatar.png"
import circle from "@icon/icon_circle.png"

function App() {
  return (
    <div>
      <Intro />
      <Typography variant={font.bungee5} color={color.lime}>
        test
      </Typography>
      <Image src={avatar} height={300} />
      <Icon src={circle} />
      <LabelButton content={"skills"} variant={"double"} />
      <Label>
        <Typography variant={font.title1} color={color.yellow}>
          안녕하세요,
        </Typography>
        <Typography variant={font.bungee4} color={color.red60}>
          이것은 Label 컴포넌트와 Typography 컴포넌트의 조합 예시입니다.
        </Typography>
      </Label>
      <HyperLink to="https://www.google.com/" variant="icon_email" />
      <br />
      <HyperLink to="https://www.google.com/" variant="typo" />
      <br />
      <HyperLink to="https://www.google.com/" variant="icontypo_velog" />
      <IconTypography content={data.IconTypography.listItem[0]} />
      <IconTypography
        content={data.IconTypography.button.feature}
        type={data.IconTypography.type.circle}
      />
      <IconTypographyButton content={data.IconTypography.button.development} />
      <ImageList
        images={data.ImageList.communication}
        variant="communication"
      />
      <IconTypographyList contents={data.IconTypography.listItem} />
      <Area>
        <ImageList
          images={data.ImageList.communication}
          variant="communication"
        />
      </Area>
      {data.Area.map((data, index, arr) => (
        <Area
          index={index}
          length={arr.length}
          title={data.title}
          variant="main_menu"
        />
      ))}
      {data.Area.map((data, index, arr) => (
        <Area
          index={index}
          length={arr.length}
          title={data.title}
          variant="sub_menu"
        />
      ))}
      <Container
        variant="column"
        style={{
          background: color.white,
          borderRadius: style.borderRadius.br30,
          padding: style.padding.pd30,
        }}
      >
        <Image src={avatar} height={300} />
        {data.Container.Label.map((label, labelIndex) => (
          <Label key={labelIndex}>
            {label.Typography.map((text, textIndex) => (
              <Typography
                key={textIndex}
                variant={font.title1}
                color={textIndex % 2 === 0 ? color.black1 : color.red60}
              >
                {text}
              </Typography>
            ))}
          </Label>
        ))}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <HyperLink to="https://www.google.com/" variant="icon_email" />
          <HyperLink to="https://www.google.com/" variant="icon_github" />
          <HyperLink to="https://www.google.com/" variant="icon_velog" />
        </div>
      </Container>
    </div>
  )
}

export default App
