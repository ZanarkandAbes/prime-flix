import "./index.css"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">Prime Flix</Link>
      <Link className="favorites" to="/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header;
