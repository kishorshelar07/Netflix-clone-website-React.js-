import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix Logo"
            className="logo"
          />
        </div>
        <div className="navbar-right d-flex">
          <div className="language-select">
            <button className="lang-btn" >English</button>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
