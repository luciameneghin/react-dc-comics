
const Footer = (props) => {
  const { links } = props;
  return (
    <footer>
      <section className="section-footer container">
        <div className="list-footer">
          <ul className="columns">
            {links.map((item) => (
              <li key={`footer-link-${item.id}`}>
                <a href="#">
                  <h4>{item.title}</h4>

                  {item.items.map((secItem, index) => (
                    <li key={index}>{secItem}</li>
                  ))}


                </a>
              </li>
            ))}
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
