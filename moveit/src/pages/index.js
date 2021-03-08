import Head from "next/head"
import React from "react"
import styles from "../../styles/pages/Home.module.css"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { CompletedChallenge } from "../components/CompletedChallenge"
import { ChooseTimeCounter } from "../components/ChooseTimeCounter"
import { CountDown } from "../components/CountDown"
import { ChallengeBox } from "../components/ChallengeBox"
import { ChallengeProvider } from "../context/ChallengeContext"
import { CountDownProvider } from "../context/CountDownContext"
 
export default function Home(props) {
  return (
    <ChallengeProvider
      level={ props.level }
      currentExperience={ props.currentExperience }
      challengeCompleted={ props.challengeCompleted }
    >
      <div className={ styles.container}>
        <Head>
          <title>Moveit || Thiago Galvao</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ExperienceBar />
        <CountDownProvider>
          <section className={ styles.containerSection }>
            <div className={ styles.containerLeft }>
              <Profile />
              <CompletedChallenge />
              <ChooseTimeCounter />
              <CountDown />

            </div>
            <div className={ styles.containerRight } >
              <ChallengeBox />
            </div>
          </section>
        </CountDownProvider>
        
      </div>

    </ChallengeProvider>
  )
}

export const getServerSideProps = async (context) => {
  const { level, currentExperience, challengeCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}
