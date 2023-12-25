// React
import { useContext, useEffect, useState, useRef } from "react"

// Context
import { GeneralContext } from "@/lib/GeneralContext"

// Utils
import { getNextCard, saveProgress } from '@/utils/progress'

// Components
import Card from "@/components/Card"

export default function Home() {
  
  const { cards, progress, setProgress } = useContext(GeneralContext)
  const [ card, setCard ] = useState()

  const rangeRef = useRef()

  useEffect(() => {
    if (!cards) return
    setCard(getNextCard(progress, cards))
  }, [ cards, progress ]) // On initialize + each time progress changes a new card will be picked up

  const clear = () => {
    rangeRef.current.value = 50
  }

  const save = () => {
    const record = {
      right: parseInt(rangeRef.current.value),
      top: 50
    }

    clear()
    setProgress(progress => saveProgress(progress, record))
  }

  return (
    <div className="w-screen min-h-screen flex justify-center items-center font-clashroyale">
      <div className="container flex flex-col justify-center items-center">
        {
          !!card &&
          <Card card={ card } />
        }
        <div className="w-full flex justify-center items-center space-x-5 mt-5 px-5">
          <span>Left</span>
          <input ref={ rangeRef } step={ 1 } max={ 100 } type='range' className="sm:w-[300px] w-full" />
          <span>Right</span>
        </div>
        <button onClick={ save } className="mt-10 px-4 py-2 text-xl bg-gradient-to-t from-blue-600 to-blue-500 text-white rounded-md">Save</button>
      </div>
    </div>
  )
}