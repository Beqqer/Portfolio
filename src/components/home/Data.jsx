import React from 'react'
import SayHi from '../icons/SayHi'

function Data() {
    return (
        <div className="home__data">
            <h1 className="home__title">Dzmitry Kryvulka
            </h1>
            <h3 className="home__subtitle">FrontEnd Developer</h3>
            <p className="home__description">I'm a Software developer with commercial experience of one year or more, very passionate and dedicated to my work.</p>

            <a href="#contact" className="button button--flex">
                Say Hello
                <span style={{margin: '5px 0 0 5px'}}><SayHi/></span>
            </a>
       </div>
    )
}

export default Data
