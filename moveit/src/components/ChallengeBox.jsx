import React, { useContext } from "react"
import styles from "../../styles/components/ChallengeBox.module.css"
import { ChallengeContext } from "../context/ChallengeContext"
import { CountDownContext } from "../context/CountDownContext"

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)
    const { resetCountDown } = useContext(CountDownContext)
    
    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountDown()

        scrollTo(0, -1000)
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountDown()

        scrollTo(0, -1000)
    }
    return (
        <div className={ styles.challengeBoxContainer }>
            { activeChallenge ? (
                <div className={ styles.challengeActive }>
                    <header>Ganhe { activeChallenge.amount } xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={ styles.challengeFailedButton }
                            onClick={ handleChallengeFailed }
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={ styles.challengeSucceededButton }
                            onClick={ handleChallengeSucceeded }
                        >
                            Completei
                        </button>
                    </footer>

                </div>
                
                ) : (
                <div className={ styles.challengeBoxNotActive }>
                    <strong>Finalize um ciclo para receber um novo desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level" />
                        Avance de level completando desafios
                    </p>
                </div>

                ) }

        </div>
    )
}