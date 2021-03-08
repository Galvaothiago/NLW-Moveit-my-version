import React, { useContext } from "react"
import styles from "../../styles/components/CountDown.module.css"
import { CountDownContext } from "../context/CountDownContext"

export function CountDown() {
    const { 
        minutes,
        seconds,
        isActive,
        hasFinished, 
        startCountDown,
        resetCountDown
    } = useContext(CountDownContext)

    const  [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('')
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('')


    return (
        <div>
            <div className={ styles.countDownContainer }>
                <div>
                    <span>{ minuteLeft }</span>
                    <span>{ minuteRight }</span>
                </div>
                <span>:</span>
                <div>
                    <span>{ secondLeft }</span>
                    <span>{ secondRight }</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    type="button" 
                    className={ `${styles.countDownButton}` } 
                >
                    Ciclo encerrado
                    <img src="icons/check-circle.png" alt="check-circle"/>
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button"
                            className={ `${styles.countDownButton} ${styles.countDownButtonIsActive}` } 
                            onClick={ resetCountDown }
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button 
                            type="button" 
                            className={ styles.countDownButton } 
                            onClick={ startCountDown }
                        >
                                Iniciar um ciclo
                        </button>
                    ) }
                </>
            ) }






        </div>


    )
}