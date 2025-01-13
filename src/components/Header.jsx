
const Header = () => {
  return (
    <header className="container">
      <div>
        <img src="src/img/dc-logo.png" alt="logo DC" />
      </div>
      <div className="list-header">
        <ul className="">
          <li><a href="#">characters</a></li>
          <li><a href="#" className="active">comics</a></li>
          <li><a href="#" >movies</a></li>
          <li><a href="#">tv</a></li>
          <li><a href="#">games</a></li>
          <li><a href="#">collectibles</a></li>
          <li><a href="#">videos</a></li>
          <li><a href="#">fans</a></li>
          <li><a href="#">news</a></li>
          <li><a href="#">shop</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header
