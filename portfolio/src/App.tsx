import logo from "./logo.svg"

import { Counter } from "./features/counter/Counter"
import "./App.css"
import Typography from "./components/atoms/Typography/Typography"
import Image from "./components/atoms/Image/Image"
import Icon from "./components/atoms/Icon/Icon"
import LabelButton from "./components/molecules/LabelButton/LabelButton"

import color from "./static/colors/color.json"

import avatar from "./static/images/image/img_avatar.png"
import circle from "./static/images/icon/icon_circle.png"

function App() {
  return (
    <div>
      <Typography variant="title2" color={color.lime}>
        test
      </Typography>
      <Image src={avatar} width={300} />
      <Icon src={circle} />
      <LabelButton content={"skills"} variant={"double"} />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  )
}

export default App
