import deck from "../../DeckPerguntas"
import { useState } from "react"
import CardPergunta from "../Card/CardPergunta"
import Rodape from "../Rodape/Rodape"
import GameContainer from "./style"

export default function Jogo({zapRecall}) {
    const [opened, setOpened] = useState(null)
    const [answered, setAnswered] = useState([])

    function answerQuestion(status){
        if (opened !== null){
            const newArray = [...answered, {index: opened, status: status}]
            setAnswered(newArray)
            setOpened(null)
        }
    }

    function getStatus(i){
        const card = answered.find((a) => a.index === i)
        if (card !== null && card !== undefined){
            return card.status
        } else {
            return "no status"
        }
    }

    return (
        <GameContainer>
            {deck.map((c, i) =>

               <CardPergunta 
               key={i}
               number={i +1}
               question={c.question}
               answer={c.answer}
               openCard={() => setOpened(i)}
               isOpened={i === opened}
               answerQuestion={answerQuestion}
               status = {getStatus(i)}
               />
            )}

            <Rodape 
            answered={answered}
            />
        </GameContainer>
    )
}