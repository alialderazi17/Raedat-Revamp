const About = () => {
  return (
    <>
      <div>
        {/* nav  */}
        <img src="../../public/assets/nav1.jpg" alt="navphoto" />

        {/* hello  */}
        <div className="about-hello-all">
          <div className="hello">
            <h1>
              Say Hello to <span className="title-anything">ra'edat</span>
            </h1>
            <p>
              ra'edat is a pioneering platform dedicated to unleashing the
              transformative potential of Arab women within the orange economy.
              Located in the Kingdom of Bahrain, we serve as a vibrant digital
              ecosystem where women engage in creative industries, gain
              essential skills, and connect with a community passionate about
              artistic and cultural entrepreneurship.
            </p>
          </div>
          <div className="photo-for-hello">
            <img src="../../public/assets/hello1.jpg" alt="hello-photo" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div>
          <h1>Vision & Mission</h1>
        </div>

        <div>
          <h2>Vision</h2>
          <p>
            To ignite the creative potential of Arab women in the orange
            economy, fostering a vibrant community of innovative thinkers and
            changemakers who inspire social progress and economic development.
          </p>
          <img src="../../public/assets/vision1.png" alt="vision-photo" />
        </div>

        <div>
          <h2>Mission</h2>
          <p>
            To empower Arab women by providing tools, mentorship, and
            opportunities to thrive in the orange economy.
          </p>
          <img src="../../public/assets/mission1.png" alt="mission-photo" />
        </div>

        {/* Economy */}
        <div>
          <img src="../../public/assets/orange1.jpg" alt="orange-photo" />
          <h2>
            The Orange Economy:
            <br />
            <span className="orange-name">A Creative Revolution</span>
          </h2>
          <p>
            The Orange Economy encompasses creative industries that blend
            culture, knowledge, and innovation to drive economic growth. This
            vibrant sector includes art, music, design, fashion, film,
            literature, technology, and digital media. It transforms creativity
            into economic value, enhancing cultural identity. For example, local
            artists can turn their artwork into merchandise or musicians can
            share their music worldwide through streaming platforms, connecting
            diverse cultures.
          </p>

          <p>
            This dynamic economy fosters collaboration among entrepreneurs,
            artists, and innovators, paving the way for new business models and
            sustainable development. For instance, a fashion designer may
            partner with artisans to create eco-friendly clothing that preserves
            traditional crafts. By investing in the Orange Economy, we not only
            elevate our brand but also contribute to a rich tapestry of global
            culture and creativity.
          </p>

          <p>
            <span>
              "ra'edat is not just a tool; it's a catalyst for change.
            </span>
          </p>
        </div>

        {/* Our Uniqueness */}
        <div>
          <h1>Our Uniqueness</h1>
          <p>
            ra'edat stands out by creating an inclusive platform specifically
            designed for Arab women. Our commitment to nurturing their talents
            within the orange economy empowers them to overcome barriers and
            maximize their creative potential. With pioneering features like
            AI-powered matchmaking and a dedicated marketplace, ra'edat
            transforms not just individual lives but entire communities.
          </p>

          <div className="photos-8">
            <div>
              <img src="../../public/assets/Uniqueness1.svg" alt="1" />
              <p>Create posts, articles, polls, events, and courses.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness2.svg" alt="2" />
              <p>Build community groups and sub-groups for organisations.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness3.svg" alt="3" />
              <p>Support for creating a branded e-marketplace.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness4.svg" alt="4" />
              <p>Native app available for Android and IOS devices.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness5.svg" alt="5" />
              <p>Customisable experiences for community members.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness6.svg" alt="6" />
              <p>Enjoyable and straightforward technological.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness7.svg" alt="7" />
              <p>Numerus options to choose from.</p>
            </div>

            <div>
              <img src="../../public/assets/Uniqueness8.svg" alt="8" />
              <p>
                Enhance gamification features to boost engagement and
                motivation.
              </p>
            </div>
          </div>

          {/* Teams */}
          <div className="all-team">
            <div>
              <h1>The Team</h1>
              <br />
              <div className="photo1">
                <p>Maryam Buzaboon</p>
                <p className="Team-MemeberN-Position">
                  Business Development Manager
                </p>
                <img src="../../public/assets/Maryam Buzaboon.png" alt="" />
              </div>
              <div className="photo2">
                <p>Oday Adel</p>
                <p className="Team-MemeberN-Position">Marketing Executive</p>
                <img
                  src="../../public/assets/Oday Adel.png"
                  alt="Oday Adel-phoho"
                />
              </div>
              <div className="photo3">
                <p>Fayeza Ahmed</p>
                <p className="Team-MemeberN-Position">
                  Graphic Designer / Content Creator
                </p>
                <img
                  src="../../public/assets/Fayeza Ahmed .png"
                  alt="Fayeza Ahmed-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
