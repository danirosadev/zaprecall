import LogoContainer from "../Logo/LogoContainer"
import Game from "../Game/Game"
import GlobalStyle from "../../GlobalStyle"
import ScreenContainer from "./style"
import { useState } from "react"
import MainScreen from "../MainScreen/MainScreen"

export default function App() {
  const [startGame, setStartGame] = useState(false)

  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        {startGame ? (
          <>
            <LogoContainer />
            <Game />
          </>
        ) : (
          <MainScreen setStartGame={setStartGame} />
        )}

      </ScreenContainer>
    </>

  )
}