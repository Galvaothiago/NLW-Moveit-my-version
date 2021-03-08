import React, { useContext } from "react"
import styles from "../../styles/components/Profile.module.css"
import { ChallengeContext } from "../context/ChallengeContext"

export function Profile() {
    const { level } = useContext(ChallengeContext)
    return (
        <div className={ styles.profileContainer } >
            <img src="https://github.com/Galvaothiago.png" alt="Thiago Galvao"/>
            <div>
                <strong>Thiago Galvao</strong>
                <div>
                    <img src="/icons/level.svg" alt="level"/>
                    <p>Level { level }</p>
                </div>

            </div>

        </div>
    )
}