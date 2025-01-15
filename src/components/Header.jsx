
const Header = (props) => {
  const { links } = props;
  return (
    <header className="container">
      <div>
        <img src="src/img/dc-logo.png" alt="logo DC" />
      </div>
      <div className="list-header">
        <ul>
          {links.map(item => (
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


