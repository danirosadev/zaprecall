import setaVirar from "../../img/seta_virar.png"
import setaPlay from "../../img/seta_play.png"
import { useState } from "react"
import { PerguntaAberta, PerguntaFechada, ContainerBotoes, Botao } from "./style"

function CardAberto({ question, answer, answerQuestion }) {
    const [turned, setTurned] = useState(true)

    return (
        <PerguntaAberta>
            <p data-test="flashcard-text">{turned ? question : answer}</p>
            {turned ? (
                <img data-test="turn-btn" onClick={() => setTurned(!turned)} src={setaVirar} alt="seta virar" />
            ) : (
                <ContainerBotoes>
                    <Botao data-test="no-btn" onClick={() => answerQuestion("error")} color={"#FF3030"}>Não lembrei</Botao>
                    <Botao data-test="partial-btn" onClick={() => answerQuestion("almost")} color={"#FF922E"}>Quase não lembrei</Botao>
                    <Botao data-test="zap-btn" onClick={() => answerQuestion("zap")} color={"#2FBE34"}>Zap!</Botao>
                </ContainerBotoes>
            )}
        </PerguntaAberta>
    )

}

function CardFechado({ index, number, openCard }) {
    return (
        <PerguntaFechada data-test="flashcard" key={index}>
            <p data-test="flashcard-text">{`Pergunta ${number}`}</p>
            <img data-test="play-btn" onClick={openCard} src={setaPlay} alt="play" />
        </PerguntaFechada>
    )
}

export default function CardPergunta({ number, question, answer, isOpened, openCard, answerQuestion, status }) {
console.log(status)
    return (
        <>
            {!isOpened ? (
                <CardFechado number={number} openCard={openCard} />
            ) : (
                <CardAberto question={question} answer={answer} answerQuestion={answerQuestion} />
            )
            }
        </>
    )
}