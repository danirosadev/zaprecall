import setaVirar from "../../img/seta_virar.png"
import setaPlay from "../../img/seta_play.png"
import { useState } from "react"
import {PerguntaAberta, PerguntaFechada, ContainerBotoes, Botao} from "./style"

function CardAberto({ pergunta, resposta, tentativa, setTentativa, taClicada, cartasClicadas }) {
    const [verResposta, setVerResposta] = useState(true)
    const [respostas, setRespostas] = useState([])
    
    function zapRecall(status){
        setRespostas([...respostas, status])
    }

    console.log(respostas)

    return (
        <>
            {
                verResposta ?
                    <PerguntaAberta >
                        <p data-test="flashcard-text">{pergunta}</p>
                        <img data-test="turn-btn" onClick={() => setVerResposta(!verResposta)} src={setaVirar} alt="seta virar" />
                    </PerguntaAberta>
                    :
                    <PerguntaAberta >
                        <p data-test="flashcard-text">{resposta}</p>

                        <ContainerBotoes>
                            <Botao data-test="no-btn" onClick={() => zapRecall("errou")} cor={"#FF3030"}>Não lembrei</Botao>
                            <Botao data-test="partial-btn" onClick={() => zapRecall("quase")} cor={"#FF922E"}>Quase não lembrei</Botao>
                            <Botao data-test="zap-btn" onClick={() => zapRecall("zap")} cor={"#2FBE34"}>Zap!</Botao>
                        </ContainerBotoes>
                    </PerguntaAberta>
            }
        </>

    )

}

function CardFechado({ foiClicada, index }) {
    return (
        <PerguntaFechada data-test="flashcard" key={index}>
            <p data-test="flashcard-text">{`Pergunta ${index + 1}`}</p>
            <img data-test="play-btn" onClick={() => foiClicada(index)} src={setaPlay} alt="play" />
        </PerguntaFechada>
    )
}

export default function CardPergunta({ foiClicada, index, taClicada, pergunta, resposta, cartasClicadas }) {
    const [tentativa, setTentativa] = useState(taClicada)

    return (

        <>
            {!taClicada ? (
                <CardFechado index={index} foiClicada={foiClicada} />
            ) : (
                <CardAberto pergunta={pergunta} resposta={resposta} cartasClicadas={cartasClicadas} taClicada={taClicada} tentativa={tentativa} setTentativa={setTentativa}/>
            )
            }
        </>



    )
}