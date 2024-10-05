
import './Body.css';

function Body() {
  return (
    <div className="Body">
      <div className="body-container">
      <h1>Unlimited movies, TV shows and more</h1>
      <h3>Starts at ₹149. Cancel at any time.</h3>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className="email-input">
        <input type="email" placeholder="Email address" />
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
    </div>
  );
}

export default Body;
