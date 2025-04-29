import React from 'react';
import './Home.css'
// import photo from '../../public/hamid.jpg'


export default function Home () {
    return (<div className="home">
        <div>
            <h1>Olawolé BOUSSARI</h1>
            <h2 className='pres'>I am a <span class="typing"> Software engineer.</span></h2>
        </div>
        <div>
            <img src="./hamid.png"/>
        </div>
      </div>
      )
  }