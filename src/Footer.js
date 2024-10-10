import "./Footer.css";

const footer_text = [
  {
    items: ["FAQ", "Investor Relations", "Jobs", "Terms of Use"],
  },
  {
    items: ["Help Centre", "Ways to Watch", "Privacy", "Cookie Preferences"],
  },
  {
    items: ["Account", "Corporate Information", "Contact Us", "Speed Test"],
  },
  {
    items: ["Media Centre", "Legal Notices", "Only on Netflix"],
  },
];

function Footer() {
  return (
    <div className="Footer">
      <div className="container-fluid text-white">
        <h4 style={{ textAlign: "left" }}>Questions? Call 000-800-919-1694</h4>
        <div className="list d-flex">
          {footer_text.map((text) => (
            <ul>
              {text.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="navbar-right d-flex">
        <div className="language-select">
          <button className="lang-btn">
            English <i className="bi bi-caret-down-fill"></i>
          </button>
          <div className="text-white">
            <p>Netflix India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
