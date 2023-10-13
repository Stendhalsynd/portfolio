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

import { ImageList, IconTypographyList } from "@organisms/index"

import color from "@color"
import data from "@data"

import avatar from "@image/img_avatar.png"
import circle from "@icon/icon_circle.png"

function App() {
  return (
    <div>
      <Typography variant="title2" color={color.lime}>
        test
      </Typography>
      <Image src={avatar} height={300} />
      <Icon src={circle} />
      <LabelButton content={"skills"} variant={"double"} />
      <Label>
        <Typography variant="title1" color="blue">
          안녕하세요,
        </Typography>
        <Typography variant="bungee4" color="red">
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
    </div>
  )
}

export default App
