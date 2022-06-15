import React from 'react'
import './home.css'

import {SocialIcon} from "react-social-icons"

function Home() {
    return (
      <main>
        <section id="showcase">
            <h1>Laboratory manager</h1>
            <p>prosty program do trzymania w porzadku twoich analiz laboratoryjnych</p>
        </section>

        <section id="container"></section>
            

        <section className="footer">
        
        <SocialIcon url="https://twitter.com/robertmaklo" target="_blank" style={{height: 35, width: 35, marginRight: 7, marginBottom: 10, marginTop: 10 }}/>
        <SocialIcon url="https://www.linkedin.com/in/adam-misiag-9027a4123/"  target="_blank"  style={{height: 35, width: 35, marginRight: 7, marginBottom: 10, marginTop: 10}}/>
        <SocialIcon url="https://github.com/verantius"  target="_blank"  style={{height: 35, width: 35, marginBottom: 10, marginTop: 10}}/>
        
        <p>Copyright &copy; 2022</p>
        
        </section>
      </main>  
  )
}

export default Home