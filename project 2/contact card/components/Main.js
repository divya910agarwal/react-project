import React from "react"

export default function Main(){
   return( <main>
        <h1 className="main-name">Divya Agarwal</h1>
        <h5 className="main-job">Frontend Developer</h5>
        <div className="email">
            <img className="main-logo" src="./images/Mail.png" />

          
            <h2>Email</h2>
        </div>
        <div className="main-content">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3 className="Interests">Interests</h3>
        <p>Foodie, big anime fan, finance  </p>
        </div>
    </main>
   )
}