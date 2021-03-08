import React, { useContext, useState } from "react"
import styles from "../../styles/components/ChooseTimeCounter.module.css"
import { CountDownContext } from "../context/CountDownContext"

export function ChooseTimeCounter() {
    const { isActive, chooseTimeFifteenMinutes, chooseTimeThirtyMinutes, chooseTimeFourtyFiveMinutes } =useContext(CountDownContext)

    return (
        <div className={ styles.chooseTimeCounterContainer }>
            <button
                type="button"
                onClick={ isActive ? () => { return } : chooseTimeFifteenMinutes }
            >
                15:00
            </button>

            <button
                type="button"
                onClick={ isActive ? () => { return } : chooseTimeThirtyMinutes }
            >
                30:00
            </button>

            <button
                type="button"
                onClick={ isActive ? () => { return } : chooseTimeFourtyFiveMinutes }
            >
                45:00
            </button>
        </div>
    )
}