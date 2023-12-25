// React
import { createContext, useState, useEffect } from "react"

// Utils
import { getCards, getAsset } from "@/utils/cards"

// Deps
import { useLocalStorage } from "usehooks-ts"

const GeneralContext = createContext()

const GeneralProvider = ({ children }) => {

    const [ cards, setCards ] = useState()
    const [ progress, setProgress ] = useLocalStorage('progress', [])

    useEffect(() => {
        (async () => {
          setCards([ ...await getCards() ].map((card, idx) => {
            return {
              ...card,
              img: getAsset(card.key),
              idx: idx
            }
          }))
        })()
    }, [])

    return (
        <GeneralContext.Provider value={{ cards, progress, setProgress }}>
            { children }
        </GeneralContext.Provider>
    )
}

export {
    GeneralContext,
    GeneralProvider
}