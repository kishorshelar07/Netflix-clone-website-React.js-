import React from "react";
import Qustions from "./Qustions";

function QustionSection() {
  return (
    <>
      <h2 className="text-white">Frequently Asked Questions</h2>
      <br /> <br />
      <div>
        <div>
          <Qustions qustiontext="What is Netflix?" />
          <Qustions qustiontext="Where can I watch?" />
          <Qustions qustiontext="How do I cancel?" />
          <Qustions qustiontext="What is Netflix?" />
          <Qustions qustiontext="Is Netflix good for kids?" />
          <div className="email-input2">
            <h3>
              Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <br />
            <input type="email" placeholder="Email address" />
            <button className="get-started-btn2">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default QustionSection;
