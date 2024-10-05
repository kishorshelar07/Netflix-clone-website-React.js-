import "./Qustions.css";

function Qustions() {
  return (
    
    <div className="Qustions container1"> 
        <div className="row">

          <div><h1 className=" text-white">Frequently Asked Questions </h1><br/></div>

          <div className=" qustions text-white">What is Netflix? <span>+</span> </div>

          <div className=" qustions text-white">How much does Netflix cost? <span>+</span> </div>

          <div className="qustions text-white">Where can I watch? <span>+</span> </div>

          <div className="qustions text-white">How do I cancel? <span>+</span> </div>

          <div className="qustions text-white">What is Netflix? <span>+</span> </div>

          <div className="qustions text-white">Is Netflix good for kids? <span>+</span> </div>

          <div className="email-input2">
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <input type="email" placeholder="Email address" />
            <button className="get-started-btn2">Get Started</button>
          </div>
        </div>
    </div>
  );
}

export default Qustions;
