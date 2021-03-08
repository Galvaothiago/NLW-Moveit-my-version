import React, { createContext, useState, useEffect } from "react"
import challenges from "../../challenges.json"
import Cookies from "js-cookie"
import { LevelUpModal } from "../components/LevelUpModal"

export const ChallengeContext = createContext({})

export function ChallengeProvider({ 
        children,
        ...rest
    }) {
    const [ level, setLevel ] = useState(rest.level ?? 1) 
    const [ currentExperience, setCurrentExperience ] =useState(rest.currentExperience ?? 0)
    const [ challengeCompleted, setChallengeCompleted ] = useState(rest.challengeCompleted ?? 0)
    const [ isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false)

    const [ activeChallenge, setActiveChallenge] = useState(null)
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    /*

    trecho de codigo comentado devido 'Notification.requestPermission' nao ser suportado pelos browers mobile

    useEffect(() => {
         Notification.requestPermission()
    }, [])

    */

    useEffect(() => {
       Cookies.set('level', String(level))
       Cookies.set('currentExperience', String(currentExperience))
       Cookies.set('challengeCompleted', String(challengeCompleted))
    }, [ level, currentExperience, challengeCompleted ])
    
    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false)
    }

    function levelUp() {
       setLevel(level + 1)
       setIsLevelUpModalOpen(true)
   }

    function startNewChallenge() {
       const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
       const challenge = challenges[randomChallengeIndex]

       setActiveChallenge(challenge)
       scrollTo(0, 1000)

       new Audio('/notification.mp3').play()

       if(Notification.permission === "granted") {
            new Notification('Novo desafio!!!', {
                body: `Valendo ${challenge.amount} xp!`
            })
       }

   }

   function resetChallenge() {
       setActiveChallenge(null)
   }

    function completeChallenge() {
        if(!activeChallenge) {
            return;
       }

       const { amount } = activeChallenge

       let finalExperience = currentExperience + amount

       if(finalExperience >= experienceToNextLevel) {
           finalExperience = finalExperience - experienceToNextLevel
           levelUp()
       }

       setCurrentExperience(finalExperience)
       setActiveChallenge(null)
       setChallengeCompleted(challengeCompleted + 1)

   }

    return (
        <ChallengeContext.Provider 
            value={{
                level,
                currentExperience,
                challengeCompleted,
                activeChallenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal
            }}
        >
            { children }
           { isLevelUpModalOpen && <LevelUpModal /> }
        </ChallengeContext.Provider>
    )
}