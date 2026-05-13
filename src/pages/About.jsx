import React from 'react'
import '../Style/About.css'

const About = () => {
  return (
    <div className='about-page-container'>
      <div className='about-hero-wrapper'>
        <img
          src='/assets/AboutPage/nav1.jpg'
          alt='About Header'
          className='about-nav-image'
        />
      </div>

      <div className='about-intro-section'>
        <div className='about-intro-content'>
          <h1 className='about-main-title'>
            Say Hello to <span className='about-brand-highlight'>ra'edat</span>
          </h1>
          <p className='about-description'>
            ra'edat is a pioneering platform dedicated to unleashing the
            transformative potential of Arab women within the orange economy.
            Located in the Kingdom of Bahrain, we serve as a vibrant digital
            ecosystem where women engage in creative industries, gain essential
            skills, and connect with a community passionate about artistic and
            cultural entrepreneurship.
          </p>
        </div>
        <div className='about-intro-image-box'>
          <img src='/assets/AboutPage/hello1.jpg' alt="Welcome to Ra'edat" />
        </div>
      </div>

      <div className='about-purpose-container'>
        <h1 className='about-section-heading'>Vision & Mission</h1>

        <div className='about-purpose-grid'>
          <div className='about-purpose-card'>
            <h2 className='about-sub-heading'>Vision</h2>
            <p>
              To ignite the creative potential of Arab women in the orange
              economy, fostering a vibrant community of innovative thinkers and
              changemakers who inspire social progress and economic development.
            </p>
            <img
              src='/assets/AboutPage/vision1.png'
              alt='Our Vision'
              className='about-purpose-icon'
            />
          </div>

          <div className='about-purpose-card'>
            <h2 className='about-sub-heading'>Mission</h2>
            <p>
              To empower Arab women by providing tools, mentorship, and
              opportunities to thrive in the orange economy.
            </p>
            <img
              src='/assets/AboutPage/mission1.png'
              alt='Our Mission'
              className='about-purpose-icon'
            />
          </div>
        </div>
      </div>

      <div className='about-economy-section'>
        <div className='about-economy-image'>
          <img src='/assets/AboutPage/orange1.jpg' alt='Orange Economy' />
        </div>
        <div className='about-economy-text'>
          <h2 className='about-economy-title'>
            The Orange Economy:
            <br />
            <span className='about-orange-accent'>A Creative Revolution</span>
          </h2>
          <p>
            The Orange Economy encompasses creative industries that blend
            culture, knowledge, and innovation to drive economic growth. This
            vibrant sector includes art, music, design, fashion, film,
            literature, technology, and digital media.
          </p>
          <p className='about-quote'>
            "ra'edat is not just a tool; it's a catalyst for change."
          </p>
        </div>
      </div>

      <div className='about-uniqueness-section'>
        <h1 className='about-section-heading'>Our Uniqueness</h1>
        <p className='about-uniqueness-intro'>
          ra'edat stands out by creating an inclusive platform specifically
          designed for Arab women.
        </p>

        <div className='about-uniqueness-grid'>
          {[
            {
              img: 'Uniqueness1.svg',
              text: 'Create posts, articles, polls, events, and courses.',
            },
            {
              img: 'Uniqueness2.svg',
              text: 'Build community groups and sub-groups for organisations.',
            },
            {
              img: 'Uniqueness3.svg',
              text: 'Support for creating a branded e-marketplace.',
            },
            {
              img: 'Uniqueness4.svg',
              text: 'Native app available for Android and IOS devices.',
            },
            {
              img: 'Uniqueness5.svg',
              text: 'Customisable experiences for community members.',
            },
            {
              img: 'Uniqueness6.svg',
              text: 'Enjoyable and straightforward technological.',
            },
            {
              img: 'Uniqueness7.svg',
              text: 'Numerus options to choose from.',
            },
            {
              img: 'Uniqueness8.svg',
              text: 'Enhance gamification features to boost engagement.',
            },
          ].map((item, index) => (
            <div key={index} className='about-feature-card'>
              <img
                src={`assets/AboutPage/${item.img}`}
                alt={`Feature ${index + 1}`}
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='about-team-section'>
        <h1 className='about-section-heading'>The Team</h1>
        <div className='about-team-grid'>
          <div className='about-member-card'>
            <img
              src='/assets/AboutPage/Maryam Buzaboon.png'
              alt='Maryam Buzaboon'
            />
            <div className='about-member-info'>
              <h3>Maryam Buzaboon</h3>
              <p className='about-role'>Business Development Manager</p>
            </div>
          </div>
          <div className='about-member-card'>
            <img src='/assets/AboutPage/Oday Adel.png' alt='Oday Adel' />
            <div className='about-member-info'>
              <h3>Oday Adel</h3>
              <p className='about-role'>Marketing Executive</p>
            </div>
          </div>
          <div className='about-member-card'>
            <img src='/assets/AboutPage/Fayeza Ahmed .png' alt='Fayeza Ahmed' />
            <div className='about-member-info'>
              <h3>Fayeza Ahmed</h3>
              <p className='about-role'>Graphic Designer / Content Creator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
