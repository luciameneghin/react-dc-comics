import comics from '/src/data/comics.js'
import ComicList from "./Comics/ComicList.jsx";

const Main = () => {
  return (
    <main>
      <div className="img-jumb"></div>
      <div className="content-main">
        <span className="info-page">current series</span>
        <section className="container container-main">
          <ComicList />
        </section>
        <div className='button-container'>
          <a className="load-more">load more</a>

        </div>
      </div>
    </main >
  )
}

export default Main
