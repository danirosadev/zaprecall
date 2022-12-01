import deck from "../../DeckPerguntas"
import { useState } from "react"
import CardPergunta from "../Card/CardPergunta"

let cartas = deck.map((value) => ({
    ...value,
    taClicada: false,
}))

export default function Jogo({zapRecall}) {
    const [cartasClicadas, setCartasClicadas] = useState(cartas)

    function foiClicada(indexDaCartaClicada) {
        const novasCartas = cartasClicadas.map((c, index) => {
            if (index === indexDaCartaClicada){
                return ({
                    ...c,
                    taClicada: true,
                })
            }
            return ({
                ...c,
                taClicada: false,
            })
        })
        setCartasClicadas([...novasCartas])
    }

    return (
        <>
            {cartasClicadas.map((carta, index) =>

               <CardPergunta 
               key={index}
               index={index}
               foiClicada={foiClicada}
               taClicada={carta.taClicada}
               pergunta={carta.pergunta}
               resposta={carta.resposta}
               zapRecall={zapRecall}
               cartasClicadas={cartasClicadas}
               />
            )}
        </>
    )
}