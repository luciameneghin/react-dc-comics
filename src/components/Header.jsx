const headerLinks = [
  { id: 1, label: "characters", url: "#", active: false },
  { id: 2, label: "comics", url: "#", active: true },
  { id: 3, label: "movies", url: "#", active: false },
  { id: 4, label: "tv", url: "#", active: false },
  { id: 5, label: "games", url: "#", active: false },
  { id: 6, label: "collectibles", url: "#", active: false },
  { id: 7, label: "videos", url: "#", active: false },
  { id: 8, label: "fans", url: "#", active: false },
  { id: 9, label: "news", url: "#", active: false },
  { id: 10, label: "shop", url: "#", active: false }
];



const Header = () => {

  return (
    <header className="container">
      <div>
        <img src="src/img/dc-logo.png" alt="logo DC" />
      </div>
      <div className="list-header">
        <ul>
          {headerLinks.map(item => (
            <li key={`header-link-${item.id}`}>
              <a href={item.url} className={item.active ? "active" : ''}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header


