import "../Style/PartnersPage.css"

const Partnerspage = () => {
  return (
    <div className="partners-container">
      <div className="hero-section">
        <img
          src="/assets/Media Partners/partnersImage.png"
          alt="Partners Hero"
          className="hero-image"
        />
      </div>

      <div className="content-wrapper">
        <h1 className="title">Media Partners</h1>

        <div className="partners-grid">
          <a href="https://360moms.net/ar" className="media-card">
            <div className="image-holder">
              <img src="../assets/Media Partners/MOMS360.jpg" alt="360moms" />
            </div>
          </a>

          <a href="https://www.albiladpress.com/" className="media-card">
            <div className="image-holder">
              <img
                src="../assets/Media Partners/AlBiladPress.jpg"
                alt="albiladpress"
              />
            </div>
          </a>

          <a href="https://alroya.om/" className="media-card">
            <div className="image-holder">
              <img
                src="/assets/Media Partners/AlRoyaNewspaper.jpg"
                alt="Alroya"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="content-wrapper">
        <h1 className="title">Strategic Partners</h1>
        <a
          href="https://www.instagram.com/alrawibooks/?hl=ar"
          className="media-card"
        >
          <div className="image-holder">
            <img
              src="/assets/Strategic Partners/Alrawi Books.jpg"
              alt="Alrawi"
            />
          </div>
        </a>
        <a href="https://gtrust.org/" className="media-card">
          <div className="image-holder">
            <img
              src="/assets/Strategic Partners/Golden Trust.jpg"
              alt="GoldenTrust"
            />
          </div>
        </a>
        <a href="https://www.instagram.com/bahwu/?hl=ar" className="media-card">
          <div className="image-holder">
            <img
              src="/assets/Strategic Partners/Bahrain Women Union.jpg"
              alt="bahwu"
            />
          </div>
        </a>
        <a
          href="https://kipinakids.com/kipina-nursery-school-bahrain/"
          className="media-card"
        >
          <div className="image-holder">
            <img
              src="/assets/Strategic Partners/Kipina Kids.jpg"
              alt="KIPINA"
            />
          </div>
        </a>
        <a href="https://www.fywedo.com/" className="media-card">
          <div className="image-holder">
            <img src="/assets/Strategic Partners/FYWEDO.jpg" alt="FYWEDO" />
          </div>
        </a>
        <a href="https://www.kaaf.bh/ar" className="media-card">
          <div className="image-holder">
            <img src="/assets/Strategic Partners/kaaf.png" alt="Kaaf" />
          </div>
        </a>
        <a href="https://thinksmartgulf.com/" className="media-card">
          <div className="image-holder">
            <img
              src="/assets/Strategic Partners/Thinksmart.png"
              alt="Thinksmart"
            />
          </div>
        </a>
        <a href="https://www.unido.org/" className="media-card">
          <div className="image-holder">
            <img src="/assets/Strategic Partners/UNIDO.png" alt="UNIDO" />
          </div>
        </a>
      </div>

      <div>
        <h1 className="title">Sponsors</h1>
        <a href="https://gfh.com/" className="media-card">
          <div className="image-holder">
            <img src="/assets/SponsorsImages/GFH.jpg" alt="GFH" />
          </div>
        </a>

        <a href="https://benefit.bh/" className="media-card">
          <div className="image-holder">
            <img src="/assets/SponsorsImages/Benefit.jpg" alt="Benefit" />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Partnerspage
