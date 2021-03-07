import React from "react"
import styles from "../../styles/components/Profile.module.css"

export function Profile() {
    return (
        <div className={ styles.profileContainer } >
            <img src="https://github.com/Galvaothiago.png" alt="Thiago Galvao"/>
            <div>
                <strong>Thiago Galvao</strong>
                <div>
                    <img src="/icons/level.svg" alt="level"/>
                    <p>Level 1</p>
                </div>

            </div>

        </div>
    )
}