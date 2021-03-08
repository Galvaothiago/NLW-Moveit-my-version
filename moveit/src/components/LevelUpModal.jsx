import React, { useContext } from "react"
import styles from "../../styles/components/LevelUpModal.module.css"
import { ChallengeContext } from "../context/ChallengeContext"

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengeContext)
    return (
        <div className={ styles.overlay }>
            <div className={ styles.container }>
                <header>{ level }</header>

                <strong>Parabens</strong>
                <p>Voce alcancou um novo level</p>
                <button 
                    type="button"
                    onClick={ closeLevelUpModal }
                >
                    <img src="/icons/close.svg" alt="close"/>
                </button>

            </div>

        </div>
    )
}