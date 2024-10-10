import React from "react";
import Qustions from "./Qustions";

function QustionSection() {
  // Single array with question and color combined
  let q_list = [
    { question: "What is Netflix?", color: "red" },
    { question: "Where can I watch?", color: "blue" },
    { question: "How do I cancel?", color: "green" },
    { question: "What is Netflix?", color: "purple" },
    { question: "Is Netflix good for kids?", color: "orange" }
  ];

  return (
    <>
      <h2 className="text-white">Frequently Asked Questions</h2>
      <br /> <br />
      <div>
        <div>
          {q_list.map((q_item) => {
            return (
              <Qustions
                qustiontext={q_item.question}
                style={{color: q_item.color }}  // Apply color from object
              />
            );
          })}

          <div className="email-input2">
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
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
