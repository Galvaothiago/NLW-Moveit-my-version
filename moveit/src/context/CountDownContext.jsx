import React, { createContext, useEffect, useState, useContext } from "react"
import { ChallengeContext } from "../context/ChallengeContext"

export const  CountDownContext = createContext({})

let countDownTimeout

export function CountDownProvider({ children }) {
    const { startNewChallenge } = useContext(ChallengeContext)

    const [ lastChooseTime, setLastChooseTime ] = useState(0)

    const [ time, setTime ] = useState(30 * 60)
    const [ isActive, setIsActive ] = useState(false)
    const [ hasFinished, setHasFinished ] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = (time % 60)

    function chooseTimeFifteenMinutes() {
        setTime(15 * 60)
        setLastChooseTime(15 * 60)
    }

    function chooseTimeThirtyMinutes() {
        setTime(30 * 60)
        setLastChooseTime(30 * 60)
    }

    function chooseTimeFourtyFiveMinutes() {
        setTime(45 * 60)
        setLastChooseTime(45 * 60)
    }

    function startCountDown() {
        setIsActive(true)
        
    }
    
    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setTime(lastChooseTime)
        setHasFinished(false)


    }

    useEffect(() => {
        if(isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)

        } else if(isActive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])

    return (
        <CountDownContext.Provider
            value={{
                minutes,
                seconds,
                hasFinished,
                isActive,
                startCountDown,
                resetCountDown,
                chooseTimeFifteenMinutes,
                chooseTimeThirtyMinutes,
                chooseTimeFourtyFiveMinutes
            }}
        >
            { children }
        </CountDownContext.Provider>
    )
}