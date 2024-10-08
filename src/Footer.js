import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="container-fluid text-white">
        <h4 styleName="text-align:left;" >Questions? Call 000-800-919-1694</h4>
      <div  className="list d-flex " >
        <ul>
          <li>FAQ</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
        </ul>

        <ul>
          <li>Help Centre</li>
          <li>Ways to Watch</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
        </ul>

        <ul>
          <li>Account</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
          <li>Speed Test</li>
        </ul>

        <ul>
          <li>Media Centre</li>
          <li>Legal Notices</li>
          <li>Only on Netflix</li>
        
        </ul>
      </div>
        
      </div>
      <div className="navbar-right d-flex">
          <div className="language-select"  >
            <button className="lang-btn" >English <i class="bi bi-caret-down-fill"></i></button>
            <div className="text-white" ><p>Netflix India</p></div>

          </div>
          
      </div>
    </div>
  );
}

export default Footer;
