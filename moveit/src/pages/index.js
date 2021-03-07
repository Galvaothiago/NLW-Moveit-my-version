import React from "react"
import styles from "../../styles/pages/Home.module.css"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"

export default function Home() {
  return (
    <div className={ styles.container}>
      <ExperienceBar />
      <section className={ styles.containerSection }>
        <div className={ styles.containerLeft }>
          <Profile />

        </div>
        <div className={ styles.containerRight } >

        </div>
      </section>
       
    </div>
  )
}
