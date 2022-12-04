import ContainerRodape from "./style"
import deck from "../../DeckPerguntas"

export default function Rodape({answered}) {
    return (
        <ContainerRodape data-test="footer">
            <div> {answered.length}/{deck.length} Concluídos</div>
        </ContainerRodape>
    )
}