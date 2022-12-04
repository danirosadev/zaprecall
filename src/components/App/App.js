import LogoContainer from "../Logo/LogoContainer"
import Jogo from "../Jogo/Jogo"
import GlobalStyle from "../../GlobalStyle"
import ScreenContainer from "./style"

export default function App() {

  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <LogoContainer />
        <Jogo />
      </ScreenContainer>
    </>

  )
}