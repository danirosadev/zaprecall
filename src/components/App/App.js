import LogoContainer from "../Logo/LogoContainer"
import Jogo from "../Jogo/Jogo"
import Rodape from "../Rodape/Rodape"
import GlobalStyle from "../../GlobalStyle"
import ScreenContainer from "./style"

export default function App() {

  return (
    <>
      <GlobalStyle />
      <ScreenContainer>
        <LogoContainer />
        <Jogo />
        <Rodape />
      </ScreenContainer>
    </>

  )
}