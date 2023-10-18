import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RecoilRoot } from "recoil"
import { store } from "./app/store"
import App from "./App"

import "./index.css"
import "./static/fonts/font.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </React.StrictMode>,
)
