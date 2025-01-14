
const Footer = (props) => {
  const { footerInfo, linksOne, linksTwo, linksThree } = props;
  return (
    <footer>
      <section className="info-main">
        <ul className="container">
          {footerInfo.map((item, index) => (
            <li key={`footer-info-link-${item.id}`}>
              <a href="#">
                <img src={item.imgSrc} alt={item.alt} />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className="section-footer container">
        <div className="list-footer">
          <ul>
            {linksOne.map((item) => (
              <li key={`footer-link-${item.id}`}>
                <a href="#">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.items.map((secItem, index) => (
                      <li key={index}>{secItem}</li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>

          <ul>
            {linksTwo.map((item) => (
              <li key={`footer-link-${item.id}`}>
                <a href="#">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.items.map((secItem, index) => (
                      <li key={index}>{secItem}</li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>

          <ul>
            {linksThree.map((item) => (
              <li key={`footer-link-${item.id}`}>
                <a href="#">
                  <h4>{item.title}</h4>
                  <ul>
                    {item.items.map((secItem, index) => (
                      <li key={index}>{secItem}</li>
                    ))}
                  </ul>
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
