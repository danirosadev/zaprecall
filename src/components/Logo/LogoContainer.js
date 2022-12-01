import logo from "../../img/logo.png"
import Container from "./style"

export default function LogoContainer() {
    return (
        <Container>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </Container>
    )
}