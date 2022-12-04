import logo from "../../img/logo.png"
import {StartButton, BigLogo, BigName, Container} from "./style"

export default function MainScreen({setStartGame}){
    return(
        <Container>
            <BigLogo src={logo} alt="logo" />
            <BigName>ZapRecall</BigName>
            <StartButton data-test="start-btn" onClick={() => setStartGame(true)}>Iniciar Recall!</StartButton>
        </Container>
    )
}