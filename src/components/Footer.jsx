
const Footer = () => {
  return (
    <footer>
      <section className="section-footer container">
        <div className="list-footer">
          <ul>
            <li><a href="#">
              <h4>DC comics</h4>
              <li>characters</li>
              <li>comics</li>
              <li>movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </a></li>

            <li><a href="#">
              <h4>shop</h4>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </a></li>
          </ul>
          <ul>
            <li><a href="#">
              <h4>dc</h4>
              <li>term of use</li>
              <li>privacy policy (new)</li>
              <li>ad choices</li>
              <li>advertising</li>
              <li>jobs</li>
              <li>subscription</li>
              <li>talent workshops</li>
              <li>CPSC certificates</li>
              <li>ratings</li>
              <li>shop help</li>
              <li>contact us</li>
            </a></li>
          </ul>
          <ul>
            <li><a href="#">
              <h4>sites</h4>
              <li>DC</li>
              <li>MAD magazines</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </a></li>
          </ul>
        </div>
        <div className="img-footer">
          <img src="src/img/dc-logo-bg.png" alt="Logo DC" />
        </div>
      </section>

      <section className="btn-social-footer">
        <div className="container btn-social">
          <button>sign-up now!</button>
          <div className="social">
            <span>follow us</span>
            <img src="src/img/footer-facebook.png" alt="FB" />
            <img src="src/img/footer-twitter.png" alt="Twitter" />
            <img src="src/img/footer-youtube.png" alt="YT" />
            <img src="src/img/footer-pinterest.png" alt="Pinterest" />
            <img src="src/img/footer-periscope.png" alt="Periscope" />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
