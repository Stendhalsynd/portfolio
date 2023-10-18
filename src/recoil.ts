import { atom } from "recoil"

export const isMobileState = atom({
  key: "isMobile",
  default: window.innerWidth < 780,
})

export const currentWidthState = atom({
  key: "currentWidth",
  default: window.innerWidth,
})
