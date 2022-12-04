import setaVirar from "../../img/seta_virar.png"
import setaPlay from "../../img/seta_play.png"
import zapIcon from "../../img/icone_certo.png"
import almostIcon from "../../img/icone_quase.png"
import errorIcon from "../../img/icone_erro.png"
import { useState } from "react"
import { PerguntaAberta, PerguntaFechada, ContainerBotoes, Botao, QIndex } from "./style"

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

function CardFechado({ index, number, open, status }) {

    function changeColor(){
        switch(status){
            case "error":
                return "#FF3030"
            case "almost":
                return "#FF922E"
            case "zap":
                return "#2FBE34"
            default: 
            return "#333333"
        }
    }

    function changeIcon(){
        switch(status){
            case "error":
                return errorIcon
            case "almost":
                return almostIcon
            case "zap":
                return zapIcon
            default: 
            return setaPlay
        }
    }

    function changeTest(){
        switch(status){
            case "error":
                return "no-icon"
            case "almost":
                return "partial-icon"
            case "zap":
                return "zap-icon"
            default: 
            return "play-btn"
        }
    }  

    return (
        <PerguntaFechada data-test="flashcard" key={index}>
            <QIndex data-test="flashcard-text" status={status} color={changeColor()}>{`Pergunta ${number}`}</QIndex>
            <img data-test={changeTest()} onClick={open} src={changeIcon()} alt="play" />
        </PerguntaFechada>
    )
}

export default function CardPergunta({ number, question, answer, isOpened, openCard, answerQuestion, status }) {

    function open(){
        if(status === "no status"){
            openCard()
        }
    }



    return (
        <>
            {!isOpened ? (
                <CardFechado number={number} open={open} status={status}/>
            ) : (
                <CardAberto question={question} answer={answer} answerQuestion={answerQuestion} />
            )
            }
        </>
    )
}