import comics from '/src/data/comics.js'
import ComicCard from './ComicCard'

const ComicList = () => {
  return (
    <div className="comicList">
      {comics.map(comic => (
        <ComicCard key={comic.id} comicData={comic} />
      ))}
    </div>
  )
}

export default ComicList
