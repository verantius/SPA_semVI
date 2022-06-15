import React from 'react'
import './home.css'

import {SocialIcon} from "react-social-icons"

function Home() {
    return (
      <main>
        <section id="showcase">
        <div class="container">
            <h1>Laboratory manager</h1>
            <p>prosty program do trzymania w porzadku twoich analiz laboratoryjnych</p>
        </div>
        </section>
            

        <div className="justa">
                
                <SocialIcon url="https://twitter.com/robertmaklo" target="_blank" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://www.linkedin.com/in/adam-misiag-9027a4123/"  target="_blank"  style={{height: 35, width: 35}}/>
                <SocialIcon url="https://github.com/verantius"  target="_blank"  style={{height: 35, width: 35}}/>
                
                
        </div>

        <footer>
        <p>Acme Web Design, Copyright</p>
        </footer>
        </main>
        
        
        
  )
}

export default Home