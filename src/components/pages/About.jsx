import React from 'react'

import Heading from '../common/Heading';
import { about } from '../data/dummydata';
import imag from '../data/imgs/man.png'

const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex aboutFlex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={imag} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className='primaryBtn'>Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}

export default About
