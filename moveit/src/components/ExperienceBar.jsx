import React, { useContext } from "react"
import styles from "../../styles/components/ExperienceBar.module.css"
import { ChallengeContext } from "../context/ChallengeContext"

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext)

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

    return (
       <header className={ styles.experienceBar }>
           <span>0 xp</span>
           <div>
                <div style={ { width: `${ percentToNextLevel }%` } }></div>
                <span style={ { left: `${ percentToNextLevel }%` } } >
                   { currentExperience } xp
                </span>
           </div>
           <span>{ experienceToNextLevel } xp</span>
       </header>
    )
}