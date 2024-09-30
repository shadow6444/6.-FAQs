import "./Faqs.css";
import { default as questions } from "../../faqs.js";
import { useState } from "react";

const Faqs = () => {
  const [faqs, setFaq] = useState(questions);

  function handleClick(id) {
    setFaq((prevState) =>
      prevState.map((faq) =>
        id === faq.id ? { ...faq, showAnswer: !faq.showAnswer } : faq
      )
    );
  }

  const faqsElements = faqs.map((faq) => {
    return (
      <div key={faq.id} className="faqs">
        <div className="faq-question">
          <h3>{faq.question}</h3>
          <button onClick={() => handleClick(faq.id)}>
            {faq.showAnswer ? "-" : "+"}
          </button>
        </div>
        {faq.showAnswer && <p className="faq-answer">{faq.answer}</p>}
      </div>
    );
  });

  return <>{faqsElements}</>;
};

export default Faqs;
