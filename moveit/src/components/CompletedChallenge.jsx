import React, { useContext } from "react"
import styles from "../../styles/components/CompletedChallenge.module.css"
import { ChallengeContext } from "../context/ChallengeContext"

export function CompletedChallenge() {
    const { challengeCompleted } = useContext(ChallengeContext)
    return (
        <div className={ styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>{ challengeCompleted }</span>
        </div>
    )
}