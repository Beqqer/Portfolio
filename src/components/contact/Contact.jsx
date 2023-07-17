import React from 'react'
import './contact.css'
import SayHi from '../icons/SayHi'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_xlt4t3a', 'template_vs8xxzj', form.current, 'mWjRe0ox7LmTQW-6r')
           e.target.reset()
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">

                <div className="contact__info">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                </div>
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>

                        <a href="mailto:dimos.as@mail.ru" className="contact__button">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx uil-telegram-alt contact__card-icon"></i>

                        <h3 className="contact__card-title">Telegram</h3>

                        <a href="https://t.me/beqqer" className="contact__button">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx uil-phone-alt contact__card-icon"></i>

                        <h3 className="contact__card-title">Telephone</h3>

                        <a href="tel:+375295616552" className="contact__button">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="contact__form">

                    <div className="contact__form-div">
                            <input type="text" name="name"
                                className='contact__form-input'
                                id="contact__form-input"
                                placeholder='Insert your name'
                            />
                        </div>

                        <div className="contact__form-div">
                            <input type="email" name="email"
                                className='contact__form-input'
                                id="contact__form-input"
                                placeholder='Insert your email'
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Write your project'></textarea>
                        </div>

                        <button className="button button--flex">
                        Send Message
                <span style={{margin: '5px 0 0 5px'}}><SayHi/></span>
            </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
