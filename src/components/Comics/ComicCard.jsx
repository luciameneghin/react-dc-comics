
const ComicCard = (props) => {
  const { title, thumb, series } = props.comicData
  return (
    <div className="com-card">
      <img src={thumb} alt={title} />
      <h3>{series}</h3>
    </div>
  )
}

export default ComicCard
