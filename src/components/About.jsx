import React from 'react'
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

function About() {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='code and coffe' />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut eum earum tenetur itaque! Provident ut vel necessitatibus ipsum? Tempore temporibus quia consectetur porro et eum tenetur eaque nemo exercitationem saepe.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About