import React from 'react'
import './project.css'
import { Data } from './Data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


function Projects() {
    return (
        <section className="project container section">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My completed projects</span>

            <Swiper
                className="project__container"
                loop={true}
                grabCursor={true}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
            >
                {Data.map(({ id, image, title, subtitle, description, link_code,link_project }) => {
                    return (
                        <SwiperSlide className='project__card' key={id}>
                            <img src={image} alt="" className='project__img' />
                            
                            <h3 className="project__name">{title}</h3>
                            <h4 className='project__subtitle'>{subtitle}</h4>
                            <p className="project__description">{description}</p>

                            <div className='project__button'>
                            <a href={link_project} className="button button__project-up button--flex">View project
                            <i class="uil uil-arrow-up-right"></i>
                            </a>
                            <a href={link_code} className="button button__project-down button--flex">View code
                            <i class="uil uil-arrow-up-right"></i>
                            </a>
                           </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Projects
