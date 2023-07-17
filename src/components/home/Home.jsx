import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import profile from '../../assets/profile.jpg'

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <img className='home__img' src={profile} alt="My photo" />

                    <Data/>
                </div>
            </div>
        </section>
    )
}

export default Home
